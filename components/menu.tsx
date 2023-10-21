import Link from 'next/link'
import { Button } from './ui'
import { menu } from '@/constants/menu'

const Menu = () =>
  menu.map((m, key) => (
    <Link key={key} href={m.link}>
      <Button variant="link" className="text-lg font-semibold">
        {m.name}
      </Button>
    </Link>
  ))

export { Menu }
