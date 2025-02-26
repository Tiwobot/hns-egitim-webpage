import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
      <div className="flex-auto p-5 lg:p-10">
        <h4 className="text-2xl font-semibold text-custom-blue">
          Ücretsiz Deneme Dersi İçin İletişime Geçin
        </h4>
        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
          24 saat içinde size dönüş yapacağım.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              İsim
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="İsim"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          {/* Add more form fields */}
          <div className="text-center mt-6">
            <button
              className="bg-custom-blue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover-scale"
              type="submit"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 