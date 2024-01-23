import { useEffect, useCallback } from 'react';
import './style/style.css';

export const SuModal = ({ children, width, isOpen, setIsOpen }) => {
  const handleEscKeyUp = useCallback(
    (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen();
      }
    },
    [setIsOpen, isOpen],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeyUp);
    return () => {
      window.removeEventListener('keydown', handleEscKeyUp);
    };
  }, [handleEscKeyUp]);

  return (
    <>
      <div className="sumodal__background" onClick={() => setIsOpen()}>
        <div
          className="sumodal__container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sumodal__modal">
            <div
              className="sumodal__modal__content"
              style={{ width: `${width}vw`, height: '25vh' }}
            >
              {children}
            </div>
            <button
              type="button"
              className="sumodal__btn"
              onClick={() => setIsOpen()}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
