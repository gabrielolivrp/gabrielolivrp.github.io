import Link from 'next/link'
import projects from '@/projects.json'
import { Header } from '@/components'
import { Badge, Icon } from '@/components/ui'

interface ProjectProps {
  name: string
  technologies: string[]
  banner: string
  description: string
  link: string
}

const Project = ({
  name,
  technologies,
  banner,
  description,
  link,
}: ProjectProps) => (
  <div className="flex flex-col lg:flex-row lg:h-64 p-8 bg-secondary border rounded-2xl">
    <div className="lg:pr-4">
      <h1 className="group text-lg font-bold cursor-pointer">
        <Link href={link} target="blank">
          {name}
          <Icon
            name="Link"
            size="1rem"
            className="invisible group-hover:visible inline-block ml-2"
          />
        </Link>
      </h1>
      <div className="mt-2 space-x-2">
        {technologies.map((tech, key) => (
          <Badge key={key}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-4">{description}</div>
    </div>
    <img
      src={banner}
      className="rounded-2xl mb-4 lg:mb-0 lg:w-72 lg:h-48 order-first lg:order-none"
    />
  </div>
)

const Projects = () => (
  <div className="px-4 md:px-0 max-w-3xl mx-auto">
    <div className="py-4">
      <Header />
    </div>
    <div className="space-y-8">
      {projects.map((project, key) => (
        <Project {...project} key={key} />
      ))}
    </div>
  </div>
)

export default Projects
