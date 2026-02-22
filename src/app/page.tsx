import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import HeroBanner from '@/components/HeroBanner'
import AboutSection from '@/components/AboutSection'
import CategoryStrip from '@/components/CategoryStrip'
import ServicesSection from '@/components/ServicesSection'
import ZodiacSection from '@/components/ZodiacSection'
import EventsSection from '@/components/EventsSection'
import BookingSection from '@/components/BookingSection'
import ReviewsSlider from '@/components/ReviewsSlider'
import CtaBanner from '@/components/CtaBanner'
import BlogSection from '@/components/BlogSection'
import FaqSection from '@/components/FaqSection'
import SubscribeSection from '@/components/SubscribeSection'

export const metadata: Metadata = {
  title: 'Astra - Your Life, Written in the Stars',
  description: 'The most trusted name in the field of Astrology in Nepal.',
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <AboutSection />
        <CategoryStrip />
        <ServicesSection />
        <ZodiacSection />
        <EventsSection />
        <BookingSection />
        <ReviewsSlider />
        <CtaBanner />
        <BlogSection />
        <FaqSection />
        <SubscribeSection />
      </main>

      <Footer />
      <CartSidebar />
    </>
  )
}
