import { useCities } from "@/contexts/CitiesContext";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

const formatDate = (date: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  const navigate = useNavigate();

  useEffect(
    function () {
      getCity(id);
    },
    [id],
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;
  return (
    <div className="flex w-full max-h-full flex-col gap-5  rounded-[7px] bg-gray-600 px-12 py-8">
      <div className="flex flex-col gap-2">
        <h6 className="cityHeading">City name</h6>
        <h3 className="flex items-center gap-4 text-[1.5rem] text-white">
          <span className="cityText leading-none">{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        <h6 className="cityHeading">You went to {cityName} on</h6>
        <p className="cityText">{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="flex flex-col gap-2">
          <h6 className="cityHeading">Your notes</h6>
          <p className="cityText">{notes}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h6 className="cityHeading">Learn more</h6>
        <a
          className="cityText underline text-amber-400"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia
        </a>
      </div>

      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="navBtn"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}

export default City;
