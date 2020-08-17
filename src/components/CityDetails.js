import React from "react";
function CityDetails() {
  return (
    <div className="row my-3 pl-1 ">
      <div className="col-6">
        <input type="text" className="col-12" placeholder="City" />
      </div>
      <div className="col-6">
        <input type="text" className="col-12" placeholder="State" />
      </div>
    </div>
  );
}
export default CityDetails;
