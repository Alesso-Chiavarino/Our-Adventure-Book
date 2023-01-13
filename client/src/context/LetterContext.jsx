import { useContext, createContext, useState } from "react";
import { getLettersRequest, getLetterRequest, createLetterRequest, updateLetterRequest, deleteLetterRequest } from "../api/Letter.api";

const LetterContext = createContext();

export const useLetter = () => {
    return useContext(LetterContext);
}

export const LetterProvider = ({ children }) => {

    const [letters, setLetters] = useState([]);

    const getLetters = async () => {
        const letters = await getLettersRequest()
        setLetters(letters.data);
    }

    const getLetter = async (id) => {
        const letter = await getLetterRequest(id)
        return letter;
    }

    const createLetter = async (letter) => {
        const newLetter = await createLetterRequest(letter)
        setLetters([...letters.data, newLetter]);
    }

    const updateLetter = async (id, letter) => {
        const updatedLetter = await updateLetterRequest(id, letter)
        setLetters(letters.data.map(letter => letter._id === id ? updatedLetter : letter));
    }

    const deleteLetter = async (id) => {
        await deleteLetterRequest(id)
        setLetters(letters.data.filter(letter => letter._id !== id));
    }

    return (
        <LetterContext.Provider value={{letters, getLetters, getLetter, createLetter, updateLetter, deleteLetter}}>
            {children}
        </LetterContext.Provider>
    )
}

export default LetterProvider;