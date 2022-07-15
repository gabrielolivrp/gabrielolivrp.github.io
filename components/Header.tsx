import Link from 'next/link'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Theme, useTheme } from 'contexts'
import useTranslation from 'next-translate/useTranslation'
import SelectLocale from './SelectLocale'

type MenuItemProps = {
  link: string
  children: React.ReactNode
  locale?: string
}

const MenuItem = ({ link, children, locale }: MenuItemProps) => (
  <Link href={link} locale={locale}>
    <a className="font-semibold text-lg">
      {children}
    </a>
  </Link>
)

type SelectLocaleProps = {
  locales: [{ name: string, id: string }]
  locale: string
}

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation('common')

  return (
    <div className="w-full flex items-center justify-center md:justify-end py-8">
      <div className="space-x-4 px-8 flex items-center justify-center">
        <MenuItem link="/">{t`header.home`}</MenuItem>
        <MenuItem link="/resume">{t`header.resume`}</MenuItem>
        <MenuItem link="/posts">{t`header.posts`}</MenuItem>
        <SelectLocale />
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
