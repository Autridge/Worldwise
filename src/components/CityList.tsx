import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "@/contexts/CitiesContext";

export default function CitiesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city" />;

  return (
    <ul>
      {" "}
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}{" "}
    </ul>
  );
}
