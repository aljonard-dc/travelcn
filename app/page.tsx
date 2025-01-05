import { 
    Header,
    Trends,
  } from '@/lib/imports'

export default function Home() {
  const id1 = 1;
  const id2 = 2;

  return (
    <main id="home" className='relative overflow-hidden'>
      <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
      <Header />
        <Trends id={id1}/>
        <Trends id={id2}/>
      </div>

   </main>
  );
}
