// This is the entry component for the landing page of the application.


import Footer from '@/components/landing-page/Footer';

import Navbar from '@/components/landing-page/Navbar';

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[#031614]'>
        <div className='max-w-6xl mx-auto pt-10'>
          
          <Footer />
        </div>
      </div>
    </>
  );
}
