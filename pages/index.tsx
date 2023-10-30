import Image from 'next/image'
import { Header, SocialLink } from '@/components'

const Home = () => (
  <div className="static w-full h-full flex items-center justify-center px-4">
    <div className="static max-w-4xl border flex flex-col py-4 px-10 lg:px-24 lg:py-10 bg-secondary rounded-2xl">
      <Header />

      <div className="h-full flex items-center mt-8 md:mt-0">
        <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6 order-last lg:order-none">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Olá, eu sou Gabriel Augusto
            </h1>
            <p className="text-lg font-base leading-relaxed">
              Sou um desenvolvedor de software com foco em aplicações web. Possuo
              experiências com desenvolvimento web, mobile e blockchain. Tenho
              uma boa facilidade para aprender novas tecnologias e estou sempre
              estudando para me aprimorar ainda mais.
            </p>

            <div className="flex space-x-4">
              <SocialLink name="github" />
              <SocialLink name="linkedin" />
            </div>
          </div>

          <div className="flex justify-center items-center lg:justify-end mb-8 md:mb-0 order-first lg:order-none">
            <div className="lg:w-64 md:w-48 w-32 lg:h-64 md:h-48 h-32 relative">
              <Image
                className="rounded-full border"
                src="https://avatars.githubusercontent.com/u/99810957?v=4"
                alt="User picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
