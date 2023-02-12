interface Props {
  onClick: () => void;
  className?: string;
}

export function GoBack({ onClick, className }: Props) {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}