import { Button, Dropdown, ThemeToggle, DefaultMenu } from '../../Components'

function Navbar() {
  return (
    <div className="navbar">
      <DefaultMenu />
      <img src="Images/GradientLogo.png" className="logo" />
      <img src="Images/GradientLogoLight.png" className="logo light" />
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
