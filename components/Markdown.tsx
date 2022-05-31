import ReactMarkdown from 'react-markdown'
import Code from './Code'

type MarkdownProps = {
  text: string
}

const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <Code
            language={match[1]}
          >
            {String(children).replace(/\n$/, '')}
          </Code>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },
      p: ({ className, children, ...props }) => {
        const child: React.ReactNode = children[0]

        if (typeof child === "string") {
          return (
            <p
              {...props}
              className="text-lg font-normal leading-6"
            >{children}</p>
          )
        }

        return (
          <div
            {...props}
            className={
              // @ts-ignore
              (child?.type !== 'a')
                ? 'flex justify-center'
                : ''
            }
          >{children}</div>
        )
      },
    }
    }
  >
    {text}
  </ReactMarkdown >
)

export default Markdown
