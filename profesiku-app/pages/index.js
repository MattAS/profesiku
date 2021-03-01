import {StickyHeader} from '../components/Headers/stickyHeader'
import {ContentHeader} from '../components/Headers/contentHeader'
import { LandingPage } from '../components/landingPage/landingPage'

export default function Home() {
  return (
    <div>
      <StickyHeader />
      <ContentHeader />
      <LandingPage />
    </div>
  )
}
