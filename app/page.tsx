import { Header } from '@/components/header'
import { ExperienceSharing } from '@/components/experience-sharing'
import { Cooperatives } from '@/components/cooperatives'
import { ProfessionalGuides } from '@/components/professional-guides'
import { WelcomeOffer } from '@/components/welcome-offer'
import { BlueGalleryEvent } from '@/components/blue-gallery-event'
import { SymbolicPriceLodging } from '@/components/symbolic-price-lodging'
import { DonationBox } from '@/components/donation-box'
import { WelcomeToChefchaouen } from '@/components/welcome'

export default function Home() {
  return (
    <main className="min-h-screen bg-chefchaouen-white">
      <Header />
      <WelcomeToChefchaouen />
      <ExperienceSharing />
      <Cooperatives />
      <ProfessionalGuides />
      <WelcomeOffer />
      <BlueGalleryEvent />
      <SymbolicPriceLodging />
      <DonationBox />
    </main>
  )
}

