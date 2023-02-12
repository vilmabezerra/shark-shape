import { WorkoutList } from '@/components/list/workout-list';
import { getPlans } from '@/services/plans';
import { Inter } from '@next/font/google'
import { useQuery } from 'react-query';
import classes from './styles.module.css';

const inter = Inter({ subsets: ['latin'] })


export function HomePage () {
  const { data, isLoading, error } = useQuery('getPlans', getPlans);

  return (
    <>
      <header className={ classes.sectionTitle }>
        <h2 className={ inter.className}>Seus Treinamentos</h2>
        <span className={ inter.className} style={{ fontSize: 14 }}>Ver tudo</span>
      </header>
      <WorkoutList data={(data || []).map((it: any) => ({
        title: it.name,
        tags: [],
        link: `/plans/${it.id}`
      }))}/>
    </>
  )
}