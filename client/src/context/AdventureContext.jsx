import { createContext, useContext, useState } from "react";
import { getAdventuresRequest, getAdventureRequest, createAdventureRequest, deleteAdventureRequest, updateAdventureRequest, getLimitedAdventuresRequest } from '../api/adventure.api'

const AdventureContext = createContext();

export const useAdventure = () => {
    return useContext(AdventureContext);
}

const AdventureProvider = ({ children }) => {

    const [adventures, setAdventures] = useState([]);
    const [data, setData] = useState({});

    const getAdventures = async () => {
        const result = await getAdventuresRequest()
        setAdventures(result.data.docs)
    }

    const getLimitedAdventures = async (limit, page, search) => {
        const result = await getLimitedAdventuresRequest(limit, page, search)
        const data = result.data
        setAdventures(result.data.docs)
        setData(data);
    }

    const createAdventure = async (data) => {
        // console.log(data)
        const result = await createAdventureRequest(data)
        setAdventures([...adventures, result.data])
        // console.log(result)
    }

    const deleteAdventure = (id) => {
        deleteAdventureRequest(id)
        setAdventures(adventures.filter(adventure => adventure._id !== id))
    }

    const getAdventure = async (id) => {
        const result = await getAdventureRequest(id)
        return result.data;
    }

    const updateAdventure = async (id, data, limit, page, search) => {
        const res = await updateAdventureRequest(id, data);
        // const updatedAdventure = res.data;
        const adventuress = await getLimitedAdventuresRequest(limit, page, search);
        setAdventures(adventuress.data.docs);
    }

    //fixes
    const [confirm, setConfirm] = useState(false);
    const handleConfirm = (data) => {
        setConfirm(data);
    }

    return (
        <AdventureContext.Provider value={{ adventures, data, confirm, getAdventures, createAdventure, deleteAdventure, getAdventure, updateAdventure, getLimitedAdventures, handleConfirm }}>
            {children}
        </AdventureContext.Provider>
    )
}

export default AdventureProvider;