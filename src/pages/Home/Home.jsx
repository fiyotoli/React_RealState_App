import React from 'react'
import Hero from '../../components/Hero/Hero'
import Testimonial from '../../components/Testimonial/Testimonial'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription'
import Contact from '../../components/Contact/Contact'
import Faq from '../../components/Faq/Faq'
import RecentProperties from '../../components/RecentProperties/RecentProperties'


function Home() {
  return (
    <div >
      <Hero />
      <About/>
      <Services/>
      <RecentProperties/>
      <NewsletterSubscription/>
      <Testimonial/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default Home
