import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-4 mt-5 border-top">
        <h2 className="text-center ">People</h2>
      </div>
      <div className="row mt-5  text-muted fs-6"> 
        <div className="col-6 p-5 text-center">
          <img src="media/images/nithinKamath.jpg" alt="Nithin Kamath" style={{borderRadius:"100%", width: "50%",}} />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder and CEO</h6>
        </div>
        <div className="col-6 p-5 ">
          <p>
            Nithin Kamath is the founder and CEO of Zerodha. He has a background
            in computer science and has been involved in the financial services
            industry for over a decade.
          </p>
          <p>
            He is also a member of the Securities and
            Exchange Board of India (SEBI) and the Association of Mutual Funds
            in India (AMFI).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
