export const setSearchParams = (searchParams, opts) => {
  opts ??= {};
  const { baseUrl } = opts;
  // url without end slash and ensure with question mark
  const url = baseUrl
    ? baseUrl.replace(/\/$/, "").replace(/\?$/, "") + "?"
    : "";
  return (
    url +
    Object.entries({ ...searchParams })
      .map(
        ([key, value]) =>
          value && `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .filter(Boolean)
      .join("&")
  );
};

export function objectToURLSearchParams(obj){
  const params = new URLSearchParams()

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value) => {
        params.append(`${key}[]`, value)
      })
    } else {
      params.append(key, obj[key])
    }
  }

  return params
}