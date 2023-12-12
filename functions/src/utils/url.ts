export function removeTrailingSlash(word: string): string {
  return word.replace(/\/+$/, "");
}

export function createUrlQuery(data: { [key: string]: any }): string {
  const query = Object.entries(data)
    .filter(([key, value]) => value)
    .map(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          let someString = "";
          value.forEach((v: any) => {
            someString += `${createUrlQuery({ [key]: v })}&`;
          });
          return someString.replace(/\&+$/, "");
        } else if (typeof value === "object") {
          return createUrlQuery(value);
        } else return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      } else return "";
    })
    .join("&");
  return query.replace(/\&+$/, "");
}

export function createUrlPath(data: { [key: string]: any }): string {
  const query = Object.entries(data)
    .filter(([key, value]) => value)
    .map(([key, value]) => {
      if (value) return `${encodeURIComponent(value)}`;
      else return "";
    })
    .join("/");
  return query.replace(/\/+$/, "");
}
