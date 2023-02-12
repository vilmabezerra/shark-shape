import classes from './styles.module.css';
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  )
}
function ExpandIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
  )
}

function Tag({ children }: WrapperProps) {
  return <span className={classes.tag}>{ children }</span>
}

interface ListItemProps {
  title: string;
  tags: string[]
  link?: string;
}

interface WrapperProps {
  children: ReactNode;
}

function WorkoutListItem({
  title,
  tags,
  link
}: ListItemProps) {
  const Wrapper = link ? 
  ({ children }: WrapperProps) => <Link href={link} className={classes.link}>{ children } </Link> : 
  ({ children }: WrapperProps) => <a className={classes.link}>{ children }</a>
  
  return (
    <Wrapper>
    <li className={classes.listItem}>
      <span className={classes.itemTitle}>
        <ClockIcon />
        <span className={classes.titleWrap}>
        <h3 className={ inter.className }>{ title }</h3>
        <span>
          {
            (['Tag']).map((it) => <Tag>{it}</Tag>)
          }
        </span>
        </span>
      </span>
      <ExpandIcon />
      </li>
      </Wrapper>

  )
}

interface Props {
  data: Array<ListItemProps>
}

export function WorkoutList({ data }: Props) {
  return (
    <ul className={classes.list}>
      {
        data.map(it => (
          <WorkoutListItem tags={it.tags} title={ it.title } link={it.link} />
        ))
      }
    </ul>
  )
}