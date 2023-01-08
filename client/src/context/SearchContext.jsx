import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState("");
   
    const getSearch = (data) => {
        setSearch(data)
    }
    
    return (
        <SearchContext.Provider value={{ search, getSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;

