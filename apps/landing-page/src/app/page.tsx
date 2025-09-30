import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero/hero'
import HowItWorks from '@/components/how-it-works'
import PreLaunchHeader from '@/components/pre-launch-header'
import Pricing from '@/components/pricing'
import Product from '@/components/product'
import Waitlist from '@/components/waitlist/waitlist'

export default function Home() {
  return (
    <main>
      <PreLaunchHeader />
      <Header />
      <Hero />
      <Product />
      <HowItWorks />
      <Features />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  )
}
