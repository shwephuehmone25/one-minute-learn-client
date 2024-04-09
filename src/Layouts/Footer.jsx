import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#444444] text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl mb-2">From The Blog</h2>
            <h3 className="text-lg mb-2">Post Title</h3>
            <p className="text-sm mb-4">
              <span className="text-[#76c38f]">Admin</span>, domainname.com <br/> Friday, 6th April 2000
            </p>
            <p className="text-sm mb-4">
              Vestibulum accumsan egestibulum eu justo convallis augue estas aenean elit intesque sed...
            </p>
            <a href="#" className="text-[#76c38f] hover:underline">Read More »</a>
          </div>

          <div>
            <h2 className="text-xl mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Lorem ipsum dolor sit</a></li>
              <li><a href="#" className="hover:underline">Amet consectetur</a></li>
              <li><a href="#" className="hover:underline">Praesent vel sem id</a></li>
              <li><a href="#" className="hover:underline">Curabitur hendrerit est</a></li>
              <li><a href="#" className="hover:underline">Aliquam eget erat nec sapien</a></li>
              <li><a href="#" className="hover:underline">Sed a nulla urna</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl mb-2">Latest Tweets</h2>
            <p className="text-sm mb-2">
              <span className="text-[#76c38f]">@namehere</span> Justoid nonummy laoreet phasellent penatoque in antesque...
            </p>
            <p className="text-sm">
              <span className="text-[#76c38f]">@namehere</span> Justoid nonummy laoreet phasellent penatoque in antesque...
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Contact Us</h2>
            <form className="space-y-2">
              <input type="text" name="name" placeholder="Full Name" className="w-full p-2 bg-[#222222] text-[#989898] rounded" />
              <input type="email" name="email" placeholder="Email Address" className="w-full p-2 bg-[#222222] text-[#989898] rounded" />
              <input type="text" name="subject" placeholder="Subject" className="w-full p-2 bg-[#222222] text-[#989898] rounded" />
              <textarea name="message" placeholder="Message" rows="4" className="w-full p-2 bg-[#222222] text-[#989898] rounded"></textarea>
              <button type="submit" className="w-full bg-[#303030] text-white p-2 rounded">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#2b2b2b] py-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4">
          <p>Copyright © {year} The N0V@TE - All Rights Reserved</p>
          <p>Template by OS Templates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
