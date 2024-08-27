import logo from "./assets/logo.png";
import Nav from "./Nav";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="bg-gray-100 top-0 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8 relative">
      {/* logo component화 하기 */}
      <img src={logo} alt="Logo" className="w-36 h-16" />
      <div className="absolute inset-0 flex items-center justify-center">
        <SearchInput />
      </div>
      <Nav />
    </nav>
  );
}

export default Navbar;
