import React from 'react';

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #72bef3; } /* Adjust the color to fit your design */
          }

          .flashy {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <footer id="foundation" className="text-white py-12 px-8 font-stone">
        <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Title */}
          <div>
            <img src="https://i.ibb.co/0hL4Vp1/main-LOGO.gif" alt="Logo" className="mx-auto mb-4 h-20 w-auto transition duration-300 ease-in-out hover:scale-105" />
            <h2 className="text-3xl font-bold flashy">$BEAN Token</h2> {/* Apply the flashy class here */}
          </div>
          
          {/* Description and Social Icons */}
          <div>
            <p className="leading-relaxed max-w-xl flashy mx-auto text-lg mb-6">
              $BEAN: So if we kill the jeeter, the one waiting for us on the other side of the sea, will we... finally be free?
            </p>
            <div className="flex justify-center space-x-4 mt-4 flashy">
              {/* Social media links */}
              <a href="https://twitter.com/beantokensol" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition duration-300 ease-in-out hover:scale-125">
                <span>Twitter</span> {/* Consider replacing <span> with an actual icon */}
              </a>
              <a href="https://t.me/beantokensol" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition duration-300 ease-in-out hover:scale-125">
                <span>Telegram</span> {/* Consider replacing <span> with an actual icon */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
