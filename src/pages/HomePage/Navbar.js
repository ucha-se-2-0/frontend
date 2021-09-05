import { ThemeToggle, DefaultMenu } from '../../Components'

function Navbar() {
  return (
    <div className="navbar">
      <DefaultMenu />
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
