import React, { useState } from 'react';
import ConfirmationPage from './ConfirmationPage'; // تأكد من مسار الاستيراد الصحيح
import './FormPage.css'; // تأكد من استيراد ملف CSS

const FormPage = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <ConfirmationPage name={name} gender={gender} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/22/45/85/360_F_322458522_fWMrqLWx59EDO1jYpMq0ACdkzv8YEYUj.jpg')" }}>
      <div className=" bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 cursive-font">Welcome!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 cursive-font" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="border rounded-lg w-full py-3 px-4 focus:outline-none cursive-font" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 cursive-font">Gender</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="border rounded-lg w-full py-3 px-4 focus:outline-none cursive-font"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white rounded-lg py-3 px-4 w-full transition-colors duration-300 hover:bg-blue-700 cursive-font"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
