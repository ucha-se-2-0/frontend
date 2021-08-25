import { Dropdown, ThemeToggle } from '../../Components'


function Menu() {
  return (
    <Dropdown offset={20} className="navigation" name={<i className="fas fa-bars" />} options={[
      { name: "Вход", link: "/login" },
      { name: "Регистрация", link: "/signup" },
      { name: "Уроци", link: "/lessons" }
    ]}>
    </Dropdown>
  )
}

function Navbar() {
  return (
    <div className="navbar">
      <Menu />
      <img src="Images/GradientLogo.png" className="logo" />
      <img src="Images/GradientLogoLight.png" className="logo light" />
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
