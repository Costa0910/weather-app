// import WEATHER_DATA_KEY from "../../../../../apiKey";
import useSWR from "swr";
import QueryResponse from "./QueryResponse/QueryResponse";
import { FetchQueryStyle } from "./fetchQuery-style";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function FetchQuery({ query, setNewState }) {
  const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
    import.meta.env.VITE_WEATHER_DATA_KEY
  }&q=${query}`;

  const { data, error } = useSWR(url, fetcher);

  if (!error && !data) return <h1>Loading</h1>;

  if (error) return <h1>Error, Refresh the page...</h1>;

  // show all correspond cities to user
  const allResponse = data.map((city) => (
    <QueryResponse setNewState={setNewState} city={city} key={city.Key} />
  ));
  return <FetchQueryStyle>{allResponse}</FetchQueryStyle>;
}

export default FetchQuery;
