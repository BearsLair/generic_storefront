import "../css/NavBar.css";

function NavBar() {
  return (
    <div className="nav-div">
      <h2 className="nav-title">Shop-a-holic</h2>
      <div className="nav-search">
        <input type="text" className="nav-input" />
        <button className="nav-searchbtn">Submit</button>
      </div>
      <button className="nav-cartbtn">Cart</button>
    </div>
  );
}

export default NavBar;
