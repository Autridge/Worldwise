// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import BackBtn from "./BackBtn";
import useURLPosition from "@/hooks/useURLPosition";
import Message from "./Message";
import Spinner from "./Spinner";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

function Form() {
  const navigate = useNavigate();

  const { mapLat: lat, mapLng: lng } = useURLPosition();

  const [isLoadingGeo, setIsLoadingGeo] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeo(true);
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await res.json();

          if (!data.countryCode) {
            throw new Error(
              "That doesn't seem to be a city. CLick somewhere else😊",
            );
          }
          console.log(data);
          setCityName(data?.city || data.locality || "");
          setCountryName(data?.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err: unknown) {
          if (err instanceof Error) setGeocodingError(err.message);
        } finally {
          setIsLoadingGeo(false);
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );

  if (isLoadingGeo) return <Spinner />;
  if (geocodingError) return <Message message={geocodingError} />;
  return (
    <form className="flex flex-col bg-gray-950 p-4 text-gray-950 gap-2">
      <div className="flex flex-col gap-1">
        <label className="cityHeading" htmlFor="cityName">
          City name
        </label>
        <input
          className=" bg-gray-300 "
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className="size-2 rounded-2xl">{emoji}</span>
      </div>

      <div className="flex flex-col gap-1">
        <label className="cityHeading" htmlFor="date">
          When did you go to {cityName}?
        </label>
        <input
          className="bg-gray-300"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="">
        <label className="cityHeading" htmlFor="notes">
          Notes about your trip to {cityName}
        </label>
        <textarea
          className="bg-gray-300 w-full"
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between items-center">
        <Button type="greenBtn">Add</Button>
        <BackBtn />
      </div>
    </form>
  );
}

export default Form;
