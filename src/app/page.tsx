import Header from '@/components/Header'
import Main from '@/components/Main'
import SidebarLeft from '@/components/SidebarLeft'
import SidebarRight from '@/components/SidebarRight'

export default function Home() {
  return (
    <>
      <Header />
      <SidebarLeft />
      <SidebarRight />
      <Main />
    </>
  )
}
