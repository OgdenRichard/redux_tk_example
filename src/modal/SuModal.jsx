import { useSuModalTransition } from './useSuModalTransition';
import { useCloseOnEscKey } from './useCloseOnEscKey';
import './style/style.css';

export const SuModal = ({
  children,
  isOpen,
  setIsOpen,
  suModalTransition = true,
  closeButton = true,
  closeOnClickOut = true,
  closeOnEscKey = true,
  styleOptions,
}) => {
  const setTransition = useSuModalTransition(isOpen);
  useCloseOnEscKey(isOpen, setIsOpen, closeOnEscKey);

  return (
    <>
      <div
        className="sumodal__background"
        onClick={closeOnClickOut ? () => setIsOpen(false) : undefined}
        style={(styleOptions && styleOptions.background) || null}
      >
        <div
          className={`${
            (suModalTransition && 'sumodal__initpos') || 'sumodal__container'
          } ${
            (suModalTransition && setTransition && 'sumodal__finalpos') || ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sumodal__modal"
            style={(styleOptions && styleOptions.container) || null}
          >
            <div
              className="sumodal__modal__content"
              style={(styleOptions && styleOptions.content) || null}
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
