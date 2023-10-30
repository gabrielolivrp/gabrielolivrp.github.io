import { Button, Icon } from '@/components/ui'
import Link from 'next/link'

const socials = {
  github: {
    name: 'Github',
    url: 'https://www.github.com/gabrielolivrp',
    icon: 'Github',
  },
  linkedin: {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/gabrielolivrp',
    icon: 'Linkedin',
  },
}

interface SocialProps {
  name: keyof typeof socials
}

const SocialLink = ({ name }: SocialProps) => {
  const { name: socialName, url, icon } = socials[name]

  const goTo = () => {}

  return (
    <Link href={url} title={socialName} rel="noreferrer" target="_blank">
      <Button variant="link" size="icon">
        <Icon size="30" name={icon as any} />
      </Button>
    </Link>
  )
}

export { SocialLink }
