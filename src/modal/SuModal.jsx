import { useEffect, useCallback } from 'react';
import './style/style.css';

export const SuModal = ({ children, width, isOpen, setIsOpen }) => {
  const show = isOpen ? 'sumodal__visible' : '';
  const handleEscKeyUp = useCallback(
    (event) => {
      event.stopImmediatePropagation();
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscKeyUp);
    } else {
      window.removeEventListener('keydown', handleEscKeyUp);
    }
    return () => {
      window.removeEventListener('keydown', handleEscKeyUp);
    };
  }, [handleEscKeyUp, isOpen]);

  return (
    <>
      <div
        className={`sumodal__background ${show}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="sumodal__container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sumodal__modal" style={{ width: `${width}vw` }}>
            <div className="sumodal__modal__content">{children}</div>
            <button
              type="button"
              className="sumodal__btn"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
