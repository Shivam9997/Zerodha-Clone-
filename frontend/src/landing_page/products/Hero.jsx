import React from 'react';

function Hero() {
    return (  
        <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center">
        <h1 className="mt-5">Technology</h1>
        <p className='text-muted mt-3'>Sleek modern intuitive trading platforms</p>
       <p> check out our <a href="" style={{textDecoration:"none"}}>investment offerings{" "}<i className="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
    );
}

export default Hero;