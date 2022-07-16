import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

    const apiKey = "3dbd69f687aa4441bc8352ee8caa6980";
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);


    //! consultarAPI
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apiKey}`;

            const data = await axios.get(url);
            setNoticias(data.data.articles);
            

        }
        consultarAPI();
    }, [categoria]);

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider value={{
            handleChangeCategoria,
            categoria,
            noticias
        }}>
            {children}
        </NoticiasContext.Provider>
    );
};

export{NoticiasProvider };
export default NoticiasContext;