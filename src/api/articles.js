import { DELIVERY_URL } from "./endpoints";
import { fetchJson } from "./fetchJson";

export function fetchArticle(id) {
  return fetchJson(`${DELIVERY_URL}/content/${id}`);
}
