import { useState } from 'react'
import { Button, Icon } from './ui'
import { Menu } from './menu'
import Link from 'next/link'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-2xl w-2/3 h-1/4 transition ease-in-out ${open ? 'block' : 'hidden'}`}
      >
        <Button
          className="absolute top-1 right-1"
          variant="link"
          onClick={() => setOpen(false)}
        >
          <Icon name="X"></Icon>
        </Button>
        <div className="h-full flex flex-col space-y-4 items-center justify-center">
          <Menu />
        </div>
      </div>

      <div className="flex items-center justify-between md:mb-8">
        <h1 className="text-lg font-semibold leading-relaxed">
          <Link href="/">Logo Here</Link>
        </h1>
        <div className="hidden lg:flex space-x-8">
          <Menu />
        </div>
        <div className="flex lg:hidden">
          <Button variant="link" onClick={() => setOpen(true)}>
            <Icon name="Menu"></Icon>
          </Button>
        </div>
      </div>
    </>
  )
}

export { Header }
