import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");
  const [orderVersion, setOrderVersion] = useState(0);

  const openOrderWindow = (uid, mode = "BUY") => {
    setIsOrderWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
  };

  const closeBuyWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  const notifyOrderUpdate = () => {
    setOrderVersion((prev) => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openOrderWindow,
        closeBuyWindow,
        notifyOrderUpdate,
        orderVersion,
      }}
    >
      {children}
      {isOrderWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;