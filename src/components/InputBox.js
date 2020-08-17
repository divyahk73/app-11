import React from "react";
function InputBox() {
  return (
    <div>
      <input
        className="col-12 my-3 mx-1"
        type="text"
        value="dharanee86@gmail.com"
      />
      <input
        className="col-12 my-3 mx-1"
        type="text"
        placeholder="Address Line 1"
      />
      <input
        className="col-12 my-3 mx-1"
        type="text"
        placeholder="Address Line 2"
      />
    </div>
  );
}
export default InputBox;
