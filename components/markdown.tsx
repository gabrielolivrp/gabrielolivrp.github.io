import ReactMarkdown from 'react-markdown'
import { Highlighter } from './highlighter'

type MarkdownProps = {
  text: string
}

const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    components={{
      code(props) {
        const { children, className, ...rest } = props
        const match = /language-(\w+)/.exec(className || '')

        return match ? (
          <Highlighter
            children={children}
            language={match[1]}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      },
    }}
  >
    {text}
  </ReactMarkdown>
)

export { Markdown }
