import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large'; // Optional size prop
}

const Modal: React.FC<ModalProps> = ({ show, onHide, title, body, footer, size = 'medium' }) => {
  // Close modal when "Escape" key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onHide();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onHide]);

  if (!show) return null;

  const modalSizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white rounded-lg shadow-xl ${modalSizeClasses[size]} w-full mx-4`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onHide} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">{body}</div>
        {footer && <div className="p-4 border-t border-gray-200 flex justify-end">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
