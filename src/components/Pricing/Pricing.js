import React, { createContext } from "react";
export const Ringtext = createContext("hello");
const Pricing = () => {
    const satic = "this static value";
  return (
      <Ringtext.Provider value={satic}>
      <div>
        <h2>hello from Pricing</h2>
      </div>
    </Ringtext.Provider>
  );
};

export default Pricing;
