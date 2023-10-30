import { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import haskell from 'react-syntax-highlighter/dist/cjs/languages/hljs/haskell'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript'

SyntaxHighlighter.registerLanguage('haskell', haskell)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('javascript', javascript)

interface HighlighterProps {
  children: ReactNode
  language: string
}

const Highlighter = ({ language, children }: HighlighterProps) => (
  // @ts-ignore
  <SyntaxHighlighter
    language={language}
    style={atomOneDark}
    customStyle={{
      background: 'none',
    }}
    PreTag="div"
  >
    {String(children).replace(/\n$/, '')}
  </SyntaxHighlighter>
)

export { Highlighter }
