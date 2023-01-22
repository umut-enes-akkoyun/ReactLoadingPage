import React from "react";
import "./LoadingSpinner.css";

const Spinner = ({exit}) => {
  return (
    <div className="loader-container">
      <div className="spinner">
      </div>
      <div >
        <h1>
          UMUT WEB3
        </h1>
      </div>

      <div >
        <p
          variant="button"
          textGradient={false}
          color="white"
          fontSize={10}
          letterSpacing={2}
          fontWeight="medium"
        >
          {exit === true ? "Çıkış Yapılıyor..." : "İşlem Devam Ediyor..." }
        </p>
      </div>



    </div>
  )
}

export default Spinner;