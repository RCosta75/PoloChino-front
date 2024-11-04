import React from "react";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import LoginIcon from "./LoginIcon";
export default function RightHeader({ setSearchTerm }) {
  return (
    <div className="flex gap-4">
      <SearchIcon setSearchTerm={setSearchTerm} />

      <CartIcon />

      <LoginIcon />
    </div>
  );
}
