import React from "react";
function Header() {
  return (
    <React.Fragment>
      <div>
        <h2>Customer Details</h2>

        <input
          className="input col-12 mx-1"
          type="text"
          value="+919876543210"
        />
      </div>
    </React.Fragment>
  );
}
export default Header;
