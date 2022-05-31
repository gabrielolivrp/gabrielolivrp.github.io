import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const socials = {
  github: {
    name: 'Github',
    url: 'https://www.github.com/gabrielolivrp',
    icon: AiOutlineGithub
  },
  linkedin: {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/gabrielolivrp',
    icon: AiFillLinkedin
  }
}

type SocialProps = {
  social: keyof typeof socials
}

const Social = ({ social }: SocialProps) => {
  const { name, url, icon: Icon } = socials[social]
  return (
    <a
      href={url}
      title={name}
      rel="noreferrer"
      target="_blank"
    >
      <Icon size="30" />
    </a>
  )
}

export default Social
