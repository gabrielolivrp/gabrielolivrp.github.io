import Link from 'next/link'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Theme, useTheme } from 'contexts'

type MenuItemProps = {
  link: string
  children: React.ReactNode
}

const MenuItem = ({ link, children }: MenuItemProps) => (
  <Link href={link}>
    <a className="font-semibold text-lg">
      {children}
    </a>
  </Link>
)

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="w-full flex items-center justify-center md:justify-end py-8">
      <div className="space-x-4 px-8">
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/posts">Posts</MenuItem>
        <MenuItem link="/resume">Resume</MenuItem>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className="w-12 h-12 fixed bottom-5 right-5 rounded-full dark:bg-gray-700 dark:hover:bg-zinc-800 active:shadow-lg mouse shadow transition ease-linear flex items-center justify-center"
      >
        {theme === Theme.DARK
          ? <MdOutlineLightMode size="30" />
          : <MdOutlineDarkMode size="30" />}
      </button>
    </div>
  )
}

export default Header
