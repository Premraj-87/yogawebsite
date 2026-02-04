import { useState } from "react";

const useSearch = (data, key = "name") => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(item =>
    item[key].toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filteredData };
};

export default useSearch;
