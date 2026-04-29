import { useCities } from "@/contexts/CitiesContext";
import { Link } from "react-router-dom";
export default function CityItem({ city }) {
  const { currentCity } = useCities();

  const { cityName, emoji, date, id, position } = city;

  console.log(position);

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <li
      className="flex bg-secondary-foreground text-white p-2 rounded-md  mb-2 text-sm 
    "
    >
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`cityList ${id === currentCity.id ? "border-l-4 border-brandGr" : ""}`}
      >
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>({formatDate(date)})</time>
        <button className="cursor-pointer">&times;</button>
      </Link>
    </li>
  );
}
