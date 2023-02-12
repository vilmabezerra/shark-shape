import { WorkoutList } from '@/components/list/workout-list';
import { Inter } from '@next/font/google'
import classes from './styles.module.css';
import {useRouter} from 'next/router';
import { getPlan } from '@/services/plans';
import { useQuery } from 'react-query';

const inter = Inter({ subsets: ['latin'] })


export function PlansListPage () {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useQuery(['getPlan', id], () => getPlan(id as string));

  return (
    <>
      <header className={ classes.sectionTitle }>
        <h2 className={ inter.className}>Workout Plan {id}</h2>
        {/* <span className={ inter.className} style={{ fontSize: 14 }}>Ver tudo</span> */}
      </header>
      <WorkoutList data={(data || []).map((it: any) => ({
        title: it.name,
        tags: [],
        link: `/workout/${it.id}`
      }))} />
    </>
  )
}