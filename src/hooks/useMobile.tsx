import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IMobile {
	isMobile: boolean;
	setIsMobile: Dispatch<SetStateAction<boolean>>;
};

const MobileContext = React.createContext<IMobile>({
    isMobile: false,
    setIsMobile: () => {}
});

interface MobileProviderProps {
    children: ReactNode;
  }

export const MobileProvider = ({ children }: MobileProviderProps) => {

	const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
		setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
	}, []);

    return (
		<MobileContext.Provider value={{ isMobile, setIsMobile }}>
			{children}
		</MobileContext.Provider>
	);

};

export const useMobile = () => {
    return useContext(MobileContext);
  };