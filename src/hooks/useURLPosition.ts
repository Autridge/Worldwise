import { useSearchParams } from "react-router-dom";

export default function useURLPosition() {
  const [SearchParams] = useSearchParams();
  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");

  return [lat, lng];
}
