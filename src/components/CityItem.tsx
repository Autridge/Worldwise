export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <li
      className="flex justify-between items-center gap-2 bg-secondary-foreground text-white p-3 rounded-md border-l-4 border-brandGr mb-2 mt-1
    "
    >
      <span>{emoji}</span>
      <h3>{cityName}</h3>
      <time>({formatDate(date)})</time>
      <button className="cursor-pointer">&times;</button>
    </li>
  );
}
