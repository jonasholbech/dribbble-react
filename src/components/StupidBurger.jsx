import { useState } from "react";

function StupidBurger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openCloseMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
  };
  const theClass = menuIsOpen ? "" : "hidden";
  return (
    <div>
      <nav className={theClass}>This is the menu</nav>
      <button onClick={openCloseMenu}>|||</button>
    </div>
  );
}

export default StupidBurger;
