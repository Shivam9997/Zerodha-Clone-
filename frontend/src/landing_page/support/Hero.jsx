import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-4 mb-3 mx-5">
        <div className="col-6 p-5 "> 
          <h5>Search for an answer or browse help topics to create a ticket
          </h5>
          <input placeholder="Eg: How do I activate my account?" /><br />
          <a href=""> Track account opening</a>&nbsp;&nbsp;
          <a href=""> Track segment activation</a>&nbsp;&nbsp;
          <a href=""> Intraday margins</a>&nbsp;&nbsp;
          <a href=""> Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-1 "></div>
        <div className="col-5 p-5 ">
          <h5>Features</h5>
          <ol>
            <li>
              <a href="" style={{lineHeight:"2"}}> current takeovers and Delisting - January 2025</a>
              <br />
            </li>
            <li>
              <a href="" style={{lineHeight:"2"}}>Latest Intraday leverage - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
