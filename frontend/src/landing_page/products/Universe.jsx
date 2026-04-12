import React from 'react';

function Universe() {
    return (  
       <div className="container">
        <div className="row text-center mt-5">
            <h1 className='mt-5 mb-3'>The Zerodha Universe</h1>
            <p className='mb-5'> Extend your trading and investment experience even further with partner platforms</p>
              <div className="col-4 p-3 ">
                <img src="media/images/smallcaseLogo.png" alt="smallcase Logo" />
                <p className='text-muted text-small mt-3 ' style={{fontSize:"14px"}}>Thematic investment platform</p>
              </div>
              <div className="col-4 p-3">
                <img src="media\images\streakLogo.png" alt="smallcase Logo" style={{width:"37%"}} />
                <p className='text-muted text-small mt-3 ' style={{fontSize:"14px"}}>Algo & strategy platform</p>
              </div>
              <div className="col-4 p-3 ">
                 <img src="media\images\sensibullLogo.svg" alt="sensibull Logo" style={{width:"70%"}} />
                <p className='text-muted text-small mt-3 ' style={{fontSize:"14px"}}>options trading platform</p>
              </div>
              <div className="col-4 p-3 mt-5"> 
                 <img src="media/images/zerodhaFundhouse.png" alt="smallcase Logo" style={{width:"60%"}} />
                <p className='text-muted text-small mt-3 ' style={{fontSize:"14px"}}>Asset management</p>
              </div>
              <div className="col-4 p-3 mt-5"> 
                 <img src="media/images/goldenpiLogo.png" alt="smallcase Logo" style={{width:"60%"}} />
                <p className='text-muted text-small mt-3 ' style={{fontSize:"14px"}}>Bonds trading platform</p>
              </div>
              <div className="col-4 p-3 mt-5 ">
                 <img src="media\images\dittoLogo.png" alt="smallcase Logo" style={{width:"50%"}} />
                <p className='text-muted text-small  mt-3 ' style={{fontSize:"14px"}}>Insurance platform</p>
              </div>
        </div>
        <div className="text-center mt-5 mb-5 text-muted" >
             <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "22%", margin: "0 auto" }}
        >
          {" "}
          Sign up now
        </button>
        </div>
       </div>
    );
}

export default Universe;