import Head from 'next/head';

import PageHeader from '../public/components/PageHeader';
import SliderSection from '../public/components/SliderSection';
import FeaturesSection from '../public/components/FeaturesSection';
import ContactSection from '../public/components/ContactSection';
import PageFooter from '../public/components/PageFooter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/> 
      </Head>

      
      <main>
        <PageHeader/>
        <SliderSection/>
        <FeaturesSection/>
        <ContactSection/>
        <PageFooter/>

      </main>  
    </div>
  )
}
