import ReactLogo from '../../public/logo512.png'

function Header() {
  return (
    <header className='app-header'>
      <img src={ReactLogo} alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
