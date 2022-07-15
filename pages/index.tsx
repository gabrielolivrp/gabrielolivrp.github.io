import useTranslation from 'next-translate/useTranslation'

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h1 className="font-bold text-7xl">
          {t`title`}
        </h1>
        <p className="font-semibold text-xl mt-4">
          {t`description`}
        </p>
      </div>
    </div>
  )
}

export default Home
