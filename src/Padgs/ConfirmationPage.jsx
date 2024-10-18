import React from 'react';
import Typewriter from 'react-typewriter-effect';
import './ConfirmationPage.css'; // تأكد من استيراد ملف CSS

const ConfirmationPage = ({ name }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/invitation.pdf'; // تأكد من أن المسار صحيح
    link.download = 'invitation.pdf';
    link.click();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/22/45/85/360_F_322458522_fWMrqLWx59EDO1jYpMq0ACdkzv8YEYUj.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.9)',
      }}
    >
      <div className=" bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 cursive-font">
          <Typewriter
            text={`Wedding Invitation - ${name}`}
            typeSpeed={100}
            startDelay={100}
            delay={2000}
            cursorColor="transparent"
          />
        </h2>
        <p className="text-lg md:text-xl mb-4 cursive-font">
          <Typewriter
            text="We are honored to invite you to the wedding of the Moharram and Omar families."
            typeSpeed={200}
            startDelay={200}
            delay={3000}
            cursorColor="transparent"
          />
        </p>
        <p className="text-base md:text-lg mb-4 cursive-font">
          <Typewriter
            text="Date of the event: 6/11/2024"
            typeSpeed={300}
            startDelay={300}
            delay={4000}
            cursorColor="transparent"
          />
        </p>
        <p className="text-xl font-cursive text-purple-600 mt-4 cursive-font">
          Abdallah & Asmaa
        </p>
        <a
          href="https://www.google.com/maps/place/%D9%82%D8%A7%D8%B9%D8%A9+%D9%88%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D9%82%D9%85%D8%B1%E2%80%AD/@30.4586921,30.9389827,197m/data=!3m1!1e3!4m6!3m5!1s0x14587f53b0275eef:0x222382c21a887d19!8m2!3d30.4591816!4d30.9390017!16s%2Fg%2F11llbcvw0b?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D" // Link to the location
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursive-font"
        >
          <Typewriter
            text="Location"
            typeSpeed={400}
            startDelay={400}
            cursorColor="transparent"
          />
        </a>
        <button
          onClick={handleDownload}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursive-font"
        >
          Download Invitation
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
