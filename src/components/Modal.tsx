import React, { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose(); 
    }
  };

  return (
    <div className="fixed inset-0 bg-[#ECECEC] bg-opacity-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 px-10">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-semibold text-primary px-2">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
