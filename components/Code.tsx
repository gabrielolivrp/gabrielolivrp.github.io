import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import haskell from 'react-syntax-highlighter/dist/cjs/languages/hljs/haskell'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript'

SyntaxHighlighter.registerLanguage('haskell', haskell)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('javascript', javascript)

type CodeProps = {
  children: string,
  language: string
}

const Code = ({ language, children }: CodeProps) => (
  <SyntaxHighlighter
    language={language}
    style={atomOneDark}
    customStyle={{
      background: 'none'
    }}
    PreTag="div"
  >
    {children.trim()}
  </SyntaxHighlighter>
)
export default Code
