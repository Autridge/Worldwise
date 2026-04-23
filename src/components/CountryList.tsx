import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

type City = {
  id: number;
  country: string;
  emoji: string;
};

type Country = {
  country: string;
  emoji: string;
};

export default function CountryList({
  cities,
  isLoading,
}: {
  cities: City[];
  isLoading: boolean;
}) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first country" />;

  const countries = cities.reduce((arr: Country[], city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className="flex gap-2 items-center">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
