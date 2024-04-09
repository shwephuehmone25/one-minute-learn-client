import React from 'react';
import serviceImage from '../../assets/images/home/img_service.jpg';
import workImage from '../../assets/images/home/img_290x.png'; 

const Video = () => {
  const [activeService, setActiveService] = React.useState(null);

  return (
    <div className="py-12 bg-[#b27f7f]">
      {/* Videos Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="inline-block px-3 py-1 bg-gray-800 text-white text-3xl uppercase">Videos</h2>
        </div>
        <ul className="flex flex-wrap justify-between">
          {[1, 2, 3, 4].map((item, index) => (
            <li key={index} className={`py-5 px-3 w-full md:w-[23.4%] last:mr-0 ${activeService === index ? 'bg-[#76c38f] text-white' : 'bg-white text-gray-900 hover:bg-[#76c38f] hover:text-white'} rounded text-center transition-colors duration-300`}>
              <a href="#" className="no-underline" onClick={() => setActiveService(index)}>
                <img src={serviceImage} alt="Service" className="mx-auto"/>
                <h2 className="text-xl font-bold my-2 uppercase">Service Title</h2>
                <p className="text-sm">Vestassapede et donec ut est libe ros sus et eget sed eget...</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Recent Videos Section */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="text-center mb-8">
          <h2 className="inline-block px-3 py-1 bg-gray-800 text-white text-3xl uppercase">Recent Videos</h2>
        </div>
        <ul className="flex flex-wrap -mx-2">
          {[1, 2, 3, 4, 5, 6].map((work, index) => (
            <li key={index} className="w-1/2 md:w-1/3 py-5 px-3">
              <div className="bg-gray-300 p-4 text-center">
                <a href="#" className="no-underline">
                  <img src={workImage} alt="290x" className="mx-auto"/>
                  <p className="text-white mt-2">LOREM IPSUM DOLOR</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Video;
