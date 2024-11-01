import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RightHeader from "./rightHeader/RightHeader";

function Header({ setSearchTerm }) {
  return (
    <header className="bg-white  ">
      <div className="flex h-16 justify-between  items-center  gap-8 px-4 sm:px-6 lg:px-8">
        <LeftHeader />
        <CenterHeader />
        <RightHeader setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
}

export default Header;
