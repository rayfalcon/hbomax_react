import React, {useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('');
    const defaultUserImg = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'

    const createUserAction = (e) => {
        setUser(e.target.value);
        console.log(user);
    }

    const [sideNavOpen, setSideNavOpen] = useState(false);

    const [accountModalOpen, setAccountModalOpen] = useState(false);

    const [searchModalOpen, setSearchModalOpen] = useState(false);
    return (
        <StateContext.Provider 
        value={{
            user,
            createUserAction, 
            defaultUserImg,
            sideNavOpen, 
            setSideNavOpen,
            accountModalOpen,
            setAccountModalOpen,
            searchModalOpen,
            setSearchModalOpen
        }}>
            {children}
        </StateContext.Provider>
    )
}