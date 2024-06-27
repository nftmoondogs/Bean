import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #32CD32; } /* Light green color */
          }

          .flashy-text {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side Content */}
        <p className="font-courier text-6xl mb-8">BEAN TOKEN launching on Pump.Fun💊</p>
        <a href="https://pump.fun/8paULWfwumdNQATCCutbC66vPzPLRq93sHvAvHcpump" target="_blank">
  <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy on Pump.Fun💊</button>
</a>
        <div className="font-stone"> {/* Apply the font to the entire div to affect all child text elements */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flashy-text">Tiny Devil of Sol REKT by The Titans of his world </h2>
          <p className="text-base mb-4">
            $BEAN has been rekt, jeeted multiple times by the Titans of his world, If we kill them all... does that mean... we'll be free?
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3 flashy-text">REVENGE!!! I'll wipe every one of them</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
          <li>We're born free. All of us. Free. Some don't believe it; others try to take it away... to Hell with them!</li>
            <li>If you want to try and stop me... then try to stop me from ever taking another breath. You are all free </li>
            <li>I'm Gonna Destroy Them! Every Last One Of Those JEETERS That's On SOL!</li>
          </ul>
          <img src="https://i.ibb.co/V30Q48Z/star.gif" alt="Wen Logo" className="mx-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </div>
        
        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/XJVrTmw/side-bar-side-bars.gif" alt="Skull Animation" className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
