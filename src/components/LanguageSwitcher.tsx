"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("locale", lang);
    window.location.reload();
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-end">
      <button
        className="bg-button text-white px-4 py-2 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        🌐
      </button>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-8 rounded-md w-1/2 flex flex-col gap-4">
            <div className="flex justify-end">
              <button onClick={() => setIsModalOpen(false)}>x</button>
            </div>
            <button onClick={() => changeLanguage("de")}>Deutsch</button>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("tr")}>Türkçe</button>
          </div>
        </div>
      )}
    </div>
  );
}
