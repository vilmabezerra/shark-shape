import { API } from "./api";
import { getExercise } from "./exercises";

export function getWorkout(id: string) {
  return API.get(`/workouts/${id}`)
    .then(({ data }) => data);
}

export async function getWorkoutExpanded(id: string) {
  if(!id) return;

  const workout = await API.get(`/workouts/${id}`)
    .then(({ data }) => data)

  return workout;
}

