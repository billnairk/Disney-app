const DEFAULT_URL = "https://disney_api.nomadcoders.workers.dev/characters";

export function fetchData() {
  return fetch(`${DEFAULT_URL}`).then((response) => response.json());
}

export function fetchDetailData(charId: string) {
  return fetch(`${DEFAULT_URL}/${charId}`).then((response) => response.json());
}
