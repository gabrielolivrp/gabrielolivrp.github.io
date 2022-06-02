import resume from 'resume.json'
import Container from 'components/Container'
import { formatDate } from 'utils'

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

type Educational = {
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
  educational: Educational[]
  skills: Skills
}

const Skills = ({ skills }: { skills: Skills }) => (
  <div>
    <h2>Skills</h2>
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

const Projects = ({ projects }: { projects: Project[] }) => (
  <div>
    <h2>Personal Projects</h2>
    {projects.map((project: any, key: number) => (
      <div key={key}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
)

const Experiences = ({ experiences }: { experiences: Experience[] }) => (
  <div>
    <h2>Experiences</h2>
    {experiences.map((item: any, key: number) => (
      <div key={key}>
        <h3>{item.office}</h3>
        <h5 className="italic uppercase">
          {item.company} /
          ({formatDate(item.date.start)} - {formatDate(item.date.end)})
        </h5>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
)

const Educational = ({ educational }: { educational: Educational[] }) => (
  <div>
    <h2>Educational</h2>
    {educational.map((item: any, key: number) => (
      <div key={key}>
        <h3>{item.course}</h3>
        <h5 className="italic uppercase">
          {item.institution} /
          ({formatDate(item.date.start)} - {formatDate(item.date.end)})
        </h5>
      </div>
    ))}
  </div>
)

const Resume = () => (
  <Container className="divide-y space-y-4">
    <h1>Resume</h1>
    <div>
      <h2>About me</h2>
      <p><b>Name:</b> {resume.person.name}</p>
      <p><b>Email:</b> {resume.person.email}</p>
      <p><b>Location:</b> {resume.person.location}</p>
      <p>{resume.person.about}</p>
    </div>
    <Educational educational={resume.educational} />
    <Experiences experiences={resume.experiences} />
    <Projects projects={resume.projects} />
    <Skills skills={resume.skills as Skills} />
  </Container >
)

export default Resume
