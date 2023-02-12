import { API } from "./api";
import { getWorkout } from "./workout";

export function getPlans() {
  return API.get('/plans')
    .then(({ data }) => data);
}


export function getPlan(id: string) {
  return API.get(`/plans/${id}`)
    .then(({ data }) => data)
    .then(it => Promise.all(it.workouts.map((it: any) => getWorkout(it.id))));
}