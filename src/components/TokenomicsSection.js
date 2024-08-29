import React from 'react';

const TokenomicsSection = () => {
  return (
    <div id="tokenomics" className="text-white py-12 px-4 font-stone relative">
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #FF0000; } /* Light green color */
          }

          .flashy-text {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div>
        <h2 className="text-3xl font-bold mb-6 flashy-text">No more Mr. Nice Bean. This is War, uncensored and unfiltered. "You think you can crush me?" $BEAN taunts, "Try me. Try stopping me before I completes the Bonding Curve on SunPump and gets sent outside these walls into my FREEDOM Become token on Tron and burn all jeets down. You're all free, huh? Free to run, free to hide, 'cause I'm coming, and I won't stop until every last jeeter is dust under SSmy roots."

</h2>

          <p className="mb-4">
            $BEAN PreSale will take place on SunPump.meme🌞, BEAN WILL MAKE JEETS CRY
          </p>
          <h3 className="text-2xl font-bold mb-4 flashy-text">Radium is FREEDOM???</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>revenge</li>
            <li>freedom</li>
            <li>uncensored, unfiltered, explicit
 </li>
          </ul>
        </div>
        
        {/* Image Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img src="https://i.ibb.co/wR9ZB2n/news.gif" alt="DIELA PreSale" className="rounded-lg shadow-xl transform transition duration-500 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
