import { 
    Header,
    Footer,
    Hero,
    Trends,
    About,
    Qoutes,
    IconMenu
    
  } from '@/lib/imports'



export default function Home() {
 

  return (
    <main id="home" className='relative overflow-hidden'>
      <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
        <Header />
        <Hero id={1} type='home'/>
        <IconMenu/>
        <About />
        <Trends id={1}/>
        <Trends id={2}/>
        <Qoutes/>
        <Footer/>
      </div>
      
   </main>
  );
}
