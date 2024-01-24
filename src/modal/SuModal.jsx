import { useEffect, useCallback } from 'react';
import './style/style.css';

export const SuModal = ({
  children,
  isOpen,
  setIsOpen,
  closeButton,
  closeOnClickOut,
  closeOnEscKey,
  options,
}) => {
  const handleEscKeyUp = useCallback(
    (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen],
  );

  useEffect(() => {
    if (closeOnEscKey) {
      window.addEventListener('keydown', handleEscKeyUp);
    }
    return () => {
      if (closeOnEscKey) {
        window.removeEventListener('keydown', handleEscKeyUp);
      }
    };
  }, [closeOnEscKey, handleEscKeyUp]);

  return (
    <>
      <div
        className="sumodal__background"
        onClick={closeOnClickOut ? () => setIsOpen(false) : undefined}
      >
        <div
          className="sumodal__container"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sumodal__modal"
            style={{
              background:
                options && options.background ? options.background : 'white',
            }}
          >
            <div
              className="sumodal__modal__content"
              style={{
                width: options && options.width ? options.width : 'auto',
                height: options && options.height ? options.height : 'auto',
              }}
            >
              {children}
            </div>
            {closeButton && (
              <button
                type="button"
                className="sumodal__btn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
