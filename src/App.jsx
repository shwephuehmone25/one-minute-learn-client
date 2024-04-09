import React from 'react';
import Navbar from './Layouts/Navbar';
import Video from './pages/videos/Video';
import Footer from './Layouts/Footer';
import ellipseImage from './assets/images/home/img_ellipse.png';
import leftArrow from './assets/images/home/img_left.png'; 
import rightArrow from './assets/images/home/img_right.png'; 
import './styles/common.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
<div className="flex justify-center items-center min-h-screen bg-[#7c5959] relative">
        {/* Left Arrow */}
        <img src={leftArrow} alt="Left Arrow" style={{ position: 'absolute', top: '50%', left: '300px', transform: 'translateY(-50%)' }} className="w-4 h-8" />

        {/* Banner Content */}
        <div className="container flex justify-center items-center mx-auto max-w-4xl px-[60px] py-[41px] md:py-[49px]">
          {/* Text Content */}
          <div className="pt-[99px] text-white flex-1">
            <h2 className="text-[46px] leading-[1.1] mb-[32px]">Cursus penati <br/>saccum nulla.</h2>
            <p className="text-[12px] leading-[1.6] mb-[22px] text-[#979797]">
              Nullamlacus dui ipsum conseque loborttis non euisque <br/>
              morbi penas dapibulum orna. Urnaultrices quis <br/>
              curabitur phasellentesque congue magnis vestibulum <br/>
              quismodo nulla et feugiat adipiscinia pellentum leo.
            </p>
            <a href="#" className="inline-block px-[10px] py-[10px] bg-[#76c38f] text-white rounded-[10px]">Read More Here »</a>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img src={ellipseImage} alt="Ellipse" className="max-w-full h-auto"/>
          </div>
        </div>

        {/* Right Arrow */}
        <img src={rightArrow} alt="Right Arrow" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '300px', }} className="w-4 h-8" />
      </div>

      <main className="flex-grow">
        <Video />
      </main>
      <Footer />
    </div>
  );
}

export default App;
