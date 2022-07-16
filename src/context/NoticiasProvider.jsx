import { useState, useEffect, createContext } from 'react';

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general');

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider value={{
            handleChangeCategoria,
            categoria
        }}>
            {children}
        </NoticiasContext.Provider>
    );
};

export{NoticiasProvider };
export default NoticiasContext;