import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"} }>Learn More</a>
          </div>

          <div className="mt-2">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ width: "120px", margin: "10px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ width: "120px", margin: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
