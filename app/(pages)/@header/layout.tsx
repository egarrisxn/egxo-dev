import {PropsWithChildren} from 'react'
import Header from '../_components/header'

export default function Layout({children}: PropsWithChildren) {
  return <Header>{children}</Header>
}
