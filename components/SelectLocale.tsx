import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'

const locales = {
  en: 'https://cdn-icons-png.flaticon.com/512/206/206626.png',
  pt: 'https://cdn-icons-png.flaticon.com/512/206/206597.png'
}

type Locale = keyof typeof locales

type FlagImageProps = {
  url: string
}

const FlagImage = ({ url }: FlagImageProps) => (
  <img className="w-7 h-7" src={url} />
)

type LocaleItemProps = {
  locale: Locale
}

const LocaleItem = ({ locale }: LocaleItemProps) => {
  const { asPath } = useRouter()
  const { t } = useTranslation('common')

  return (
    <Menu.Item>
      <Link href={asPath} locale={locale} className="relative">
        <a className="flex flex-row items-center space-x-2 py-2 cursor-pointer">
          <FlagImage url={locales[locale]} />
          <label className="font-semibold cursor-pointer">{t(`locales.${locale}`)}</label>
        </a>
      </Link>
    </Menu.Item>
  )
}

const SelectLocale = () => {
  const { lang } = useTranslation()
  return (
    <Menu>
      <div className="relative not-prose">
        <Menu.Button className="relative cursor-pointer flex items-center">
          <FlagImage url={locales[lang as Locale]} />
        </Menu.Button>
        <Menu.Items as="div" className="absolute right-0 w-40 bg-white dark:bg-gray-700 dark:hover:bg-zinc-800 px-2 rounded-md mt-2 shadow active:shadow-lg">
          {Object.keys(locales).map((locale, key) => {
            if (locale !== lang) {
              return <LocaleItem key={key} locale={locale as Locale} />
            }
          })}
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default SelectLocale

