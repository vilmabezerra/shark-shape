import { API } from "./api";

export async function getExercise(id: string) {
  return API.get(`/exercises/${id}`)
    .then(({ data }) => data);
}

export async function getExercises(ids: string[]) {
  return Promise.all(ids.map((it: any) => getExercise(it)))
}

