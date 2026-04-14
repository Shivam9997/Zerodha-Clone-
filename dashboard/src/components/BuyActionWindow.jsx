import { useState, useContext } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const { closeBuyWindow, notifyOrderUpdate } = useContext(GeneralContext);

  const handleSubmit = () => {
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!qty || !price || qty <= 0 || price <= 0) {
      setSubmitError("Please enter a valid quantity and price.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

api
      .post("/api/orders", {
        symbol: uid,
        qty,
        price,
        mode: mode.toUpperCase(),
      })
      .then(() => {
        notifyOrderUpdate();
        closeBuyWindow();
      })
      .catch(() => {
        setSubmitError("Order submission failed. Please try again.");
      })
      .finally(() => setSubmitting(false));
  };

  const buttonLabel = mode === "SELL" ? "Sell" : "Buy";
  const titleLabel = mode === "SELL" ? "Sell" : "Buy";

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <h2>
          {titleLabel} {uid}
        </h2>
        <button className="close-btn" onClick={closeBuyWindow}>
          ×
        </button>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              placeholder="0.00"
            />
          </fieldset>
        </div>
        {submitError && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "8px" }}>
            {submitError}
          </p>
        )}
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div className="button-group">
          <button
            className="btn btn-blue"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "Placing…" : buttonLabel}
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
