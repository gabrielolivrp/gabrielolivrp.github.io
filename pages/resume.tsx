import Container from 'components/Container'
import { formatDate } from 'utils'
import useTranslation from 'next-translate/useTranslation'

type Person = {
  name: string
  email: string
  location: string
  about: string
}

type Experience = {
  company: string
  office: string
  description: string
  date: {
    start: string
    end: string
  }
}

type Project = {
  name: string
  link?: string
  description: string
}

type Education = {
  institution: string
  course: string
  date: {
    start: string
    end: string
  }
}

type Skills = { [key: string]: string[] }

type Resume = {
  person: Person
  experiences: Experience[]
  projects: Project[]
  educational: Education[]
  skills: Skills
}

const Skills = ({ skills }: { skills: Skills }) => {
  const { t } = useTranslation('resume')
  return (
    <div>
      <h2>{t`skills`}</h2>
      <ul>
        {Object.keys(skills).map((item, key) => (
          <li key={key}>
            {item}
            {skills[item].length > 0 && (
              <ul>
                {skills[item].map((item2: string, key2: number) => (
                  <li key={key2}>{item2}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Projects = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation('resume')
  return (
    <div>
      <h2>{t`personal-projects`}</h2>
      {projects.map((project: any, key: number) => (
        <div key={key}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  const { t } = useTranslation('resume')
  return (
    <div>
      <h2>{t`experiences`}</h2>
      {experiences.map((item: any, key: number) => (
        <div key={key}>
          <h3>{item.office}</h3>
          <h5 className="italic uppercase">
            {item.company} / ({formatDate(item.date.start)} -{' '}
            {formatDate(item.date.end)})
          </h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

const Education = ({ education }: { education: Education[] }) => {
  const { t } = useTranslation('resume')
  return (
    <div>
      <h2>{t`education`}</h2>
      {education.map((item: any, key: number) => (
        <div key={key}>
          <h3>{item.course}</h3>
          <h5 className="italic uppercase">
            {item.institution} / ({formatDate(item.date.start)} -{' '}
            {formatDate(item.date.end)})
          </h5>
        </div>
      ))}
    </div>
  )
}

const Resume = () => {
  const { t } = useTranslation('resume')
  const education = t<Education[]>(
    'my-resume:education',
    {},
    { returnObjects: true }
  )
  const experiences = t<Experience[]>(
    'my-resume:experiences',
    {},
    { returnObjects: true }
  )
  const projects = t<Project[]>(
    'my-resume:projects',
    {},
    { returnObjects: true }
  )
  const skills = t<Skills>('my-resume:skills', {}, { returnObjects: true })

  return (
    <Container className="divide-y space-y-4">
      <h1>{t`resume`}</h1>
      <div>
        <h2>{t`about`}</h2>
        <p>
          <b>{t`name`}:</b> {t`my-resume:person.name`}
        </p>
        <p>
          <b>{t`email`}:</b> {t`my-resume:person.email`}
        </p>
        <p>
          <b>{t`city`}:</b> {t`my-resume:person.location`}
        </p>
        <p>{t`my-resume:person.about`}</p>
      </div>
      <Education education={education} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={skills} />
    </Container>
  )
}
export default Resume
