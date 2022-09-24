import Api from "./api";

export function getDetails(id) {
  try {
    const detalhes = Api.get(`/detalhes/${id}.json`);
    return detalhes;
  } catch (err) {
    throw err;
  }
}
