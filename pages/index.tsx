import { Button, Icon } from '@/components/ui'
import { Header, Menu, SocialLink } from '@/components'
import { useState } from 'react'

const Home = () => {


  return (
    <div className="static w-full h-full flex items-center justify-center px-4">
      <div className="static max-w-4xl md shadow-md flex flex-col py-4 px-10 lg:px-24 lg:py-10 bg-secondary rounded-2xl">
        <Header />

        <div className="h-full flex items-center mt-8 md:mt-0">
          <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6 order-last lg:order-none">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Hello, I&apos;m Gabriel Augusto
              </h1>
              <p className="text-lg font-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor
                sit amet consectetur adipisicing elit. ipsum dolor sit amet
                consectetur adipisicing elit. ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>

              <div className="flex space-x-4">
                <SocialLink name="github" />
                <SocialLink name="linkedin" />
              </div>
            </div>

            <div className="flex justify-center items-center lg:justify-end mb-8 md:mb-0 order-first lg:order-none">
              <img
                className="rounded-full border shadow lg:w-64 md:w-48 w-32 lg:h-64 md:h-48 h-32"
                src="https://avatars.githubusercontent.com/u/99810957?v=4"
                alt="User picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
