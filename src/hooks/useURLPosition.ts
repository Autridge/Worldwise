import { useSearchParams } from "react-router-dom";

export default function useURLPosition() {
  const [SearchParams] = useSearchParams();
  const mapLat = SearchParams.get("lat");
  const mapLng = SearchParams.get("lng");

  return { mapLat, mapLng };
}
