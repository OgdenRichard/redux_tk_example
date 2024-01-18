import './style/style.css';

export const SuModal = ({ children }) => {
  return (
    <>
      <div className="sumodal__background">
        <div className="sumodal__container">
          <div className="sumodal__modal">
            <div className="sumodal__modal__content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
