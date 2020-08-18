import React from "react";
function Card() {
  return (
    <React.Fragment>
      <div className="card mb-2" style={{ boxShadow: "2px 4px 10px #9e9e9e" }}>
        <div className="card-body">
          <label className="d-flex justify-content-end close-icon">X</label>
          <h5 className="card-title" style={{ color: "#000466" }}>
            Michoel Scott
          </h5>
          <p className="card-text" style={{ color: "#2f3282" }}>
            Address line 1,
            <br />
            Address line 2,
            <br />
            Street City,
            <br />
            Bngalore - 5600001
          </p>
          <button
            type="button"
            className="btn btn-primary float-right"
            style={{ backgroundColor: "#000466" }}
          >
            Edit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
