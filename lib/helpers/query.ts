import { RepositoryQuery } from "store";

function updateUrlQuery(query: RepositoryQuery) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else {
      if (key !== "page" && key !== "pageSize") {
        if (value !== "None" && value !== "") {
          searchParams.set(key, value);
        }
      }
    }
  }

  return searchParams.toString();
}

function parseQueryString(queryString: string) {
  const params = new URLSearchParams(queryString);
  const queryObject = {};

  for (const key of params.keys()) {
    const values = params.getAll(key);
    if (key !== "page" && key !== "pageSize") {
      queryObject[key] =
        values.length > 1 || key === "tags" || key === "languages" ? values : values[0];
    }
  }

  return queryObject;
}

function queryIsNotEmpty(query: RepositoryQuery) {
  return Object.values(query).some((el) => (Array.isArray(el) ? el.length > 0 : el !== ""));
}

export { parseQueryString, queryIsNotEmpty, updateUrlQuery };
