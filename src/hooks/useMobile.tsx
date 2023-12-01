import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IMobile {
	isMobile: boolean;
};

const MobileContext = React.createContext<IMobile>({
    isMobile: false,
});

interface MobileProviderProps {
    children: ReactNode;
  }

export const MobileProvider = ({ children }: MobileProviderProps) => {

	const isMobile= /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
		<MobileContext.Provider value={{ isMobile }}>
			{children}
		</MobileContext.Provider>
	);

};

export const useMobile = () => {
    return useContext(MobileContext);
  };