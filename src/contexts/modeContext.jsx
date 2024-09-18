import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

function ModeContextProvider({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ModeContext.Provider value={{ dark, setDark }}>
      {children}
    </ModeContext.Provider>
  );
}

function useDark() {
  const context = useContext(ModeContext);

  return context;
}
export { ModeContextProvider, useDark };
