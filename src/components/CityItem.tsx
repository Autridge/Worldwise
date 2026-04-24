import { Link } from "react-router-dom";
export default function CityItem({ city }) {
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
      className="flexn bg-secondary-foreground text-white p-2 rounded-md border-l-4 border-brandGr mb-2 text-sm 
    "
    >
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className="flex gap-3.5 items-center g p-2 w-full justify-between"
      >
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>({formatDate(date)})</time>
        <button className="cursor-pointer">&times;</button>
      </Link>
    </li>
  );
}
