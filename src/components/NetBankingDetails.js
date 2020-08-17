import React from "react";
function NetBnkingDetails() {
  return (
    <div className="container">
      <div className="col-12 d-sm-flex justify-content-end mx-2 my-3">
        <button type="button" className="btn btn-light">
          Rs.399
        </button>
      </div>
      <div className="col-12 mx-2">
        <div class="list-group list-color">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            NetBanking{" "}
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between"
          >
            Debit/Credict card{" "}
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between"
          >
            Paypal{" "}
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between"
          >
            UPI Wallets{" "}
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between active"
            style={{ backgroundColor: "#000466" }}
          >
            Cash{" "}
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "#000466" }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
export default NetBnkingDetails;
