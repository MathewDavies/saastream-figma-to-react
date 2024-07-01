
import { useRef } from "react";



export function Modal({isOpen, onClose, children}) {

    const wrapperRef = useRef(null);
    if (!isOpen) return null;

    const handleWrapperClick = (e) => {
        if (e.target === wrapperRef.current) {
          onClose();
        }
      };
    return (
      <div
        ref={wrapperRef}
        className="modal-wrapper fixed w-full h-[100vh] overflow-y-scroll top-0 left-0 flex justify-center items-center bg-modalBackground z-50"
        onClick={handleWrapperClick}
        
      >
        <div className="bg-white h-auto w-2/3 sm_t:w-1/2 p-6 sm_t:p-10 rounded" >
          {children}
        </div>
      </div>
    );
  }