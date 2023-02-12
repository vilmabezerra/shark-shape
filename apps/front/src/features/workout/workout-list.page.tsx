import { WorkoutList } from '@/components/list/workout-list';
import { Inter } from '@next/font/google'
import classes from './styles.module.css';
import {useRouter} from 'next/router';
import { getWorkoutExpanded } from '@/services/workout';
import { useQuery } from 'react-query';
import { getExercises } from '@/services/exercises';

const inter = Inter({ subsets: ['latin'] })


export function WorkoutListPage () {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useQuery(['getWorkoutDetails', id], async () => getWorkoutExpanded(id as string));

  const exercises = data?.exercicies as { id: string}[];

  const { data: workoutExercises, isLoading: isLoadingExercises, error: errorExercises } = useQuery(
    ['exercises'], 
    () => getExercises(exercises.map((it: any) => it.id)),
    {
      enabled: !!exercises
    }
  );

  console.log({ workoutExercises })

  return (
    <>
      <header className={ classes.sectionTitle }>
        <h2 className={ inter.className}>Exercises</h2>
        {/* <span className={ inter.className} style={{ fontSize: 14 }}>Ver tudo</span> */}
      </header>
      <WorkoutList data={(workoutExercises || []).map((it: any) => ({
        title: it.name,
        tags: []
      }))}/>
    </>
  )
}