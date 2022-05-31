import { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement>

const Container = ({ children, className }: ContainerProps) => (
  <div className={`flex-1 w-full max-w-xs md:max-w-2xl ${className}`}>
    {children}
  </div >
)

export default Container
