export function MySpecialComponent(props: {className?: string, children?: React.ReactNode}) {
  return (
    <div className={props.className}>
      <div>This is my special component</div>
      <div>{props.children}</div>
    </div>
  )
}