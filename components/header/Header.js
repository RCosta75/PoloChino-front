import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RightHeader from "./rightHeader/RightHeader";

function Header({ setSearchTerm, handleReset, handleResetFilters }) {
  // handleResetFilters en tant que prop, nous permettons au composant Header de
  //  contrôler et d'activer la réinitialisation des filtres dans un autre composant
  return (
    <header className="bg-white motion-translate-x-in-[0%] motion-translate-y-in-[-101%] motion-duration-[1.5s]/translate fixed z-50 w-full  ">
      <div className="flex h-16  justify-between  items-center  gap-8 px-4 sm:px-6 lg:px-8">
        <LeftHeader />
        <CenterHeader
          handleReset={handleReset}
          handleResetFilters={handleResetFilters}
        />
        <RightHeader setSearchTerm={setSearchTerm} className="w-1/2" />
      </div>
    </header>
  );
}

export default Header;
