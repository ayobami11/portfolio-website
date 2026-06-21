import Header from '@/components/header'
import Main from '@/components/main'
import SidebarLeft from '@/components/sidebar-left'
import SidebarRight from '@/components/sidebar-right'

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
