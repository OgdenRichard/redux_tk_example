import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <>
      <header>
        <figure className="header__logo">
          <img src={logo} alt="Wealth Health logo" />
          <figcaption>Wealth Health</figcaption>
        </figure>
      </header>
    </>
  );
};
