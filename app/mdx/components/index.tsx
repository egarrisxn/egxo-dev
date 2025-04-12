import NextImage from 'next/image'
import {MDXComponents} from 'mdx/types'
import {Code} from 'bright'
import {MDXThought} from './mdx-thought'
import {MDXImage} from './mdx-image'
import Info from '@/components/icons/other/info'
import Home from '@/components/icons/other/home'

Code.theme = {
  dark: 'solarized-dark',
  light: 'material-palenight',
  lightSelector: '[data-theme="light"]',
}

export const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return <Code {...props}>{children as any}</Code>
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDetailsElement> & {
    summary: string
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  InfoIcon: Info,
  HomeIcon: Home,
  Thought: MDXThought,
  File: File as any,
}
