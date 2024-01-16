const BurgerMenu = ({ isOpen, onToggle }) => {
  const burgerClass = isOpen ? "open" : "closed";
  return (
    <div className="burger" onClick={onToggle}>
      <span className={"top top--" + burgerClass}></span>
      <span className={"middle middle--" + burgerClass}></span>
      <span className={"bottom bottom--" + burgerClass}></span>
    </div>
  );
};
export default BurgerMenu;
