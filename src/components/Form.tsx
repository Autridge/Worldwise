// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import BackBtn from "./BackBtn";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

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
        {/* <span className={styles.flag}>{emoji}</span> */}
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
        <Button>Add</Button>
        <BackBtn />
      </div>
    </form>
  );
}

export default Form;
