import React, { createContext, useState } from "react";

interface props {
  showDetails: boolean;
  toggleShow: () => void;
}

export const GlobalContext = createContext<props>({
  showDetails: false,
  toggleShow: () => {},
});

export const MainContext: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const toggleShow = () => {
    setShowDetails(!showDetails);
  };

  return (
    <GlobalContext.Provider
      value={{
        showDetails,
        toggleShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
