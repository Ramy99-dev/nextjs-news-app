import React, { useContext, useState } from 'react';




const LanguageContext = React.createContext();
const UpdateLanguageContext = React.createContext();



export function useLanguage() {
    return useContext(LanguageContext)
}
export function useUpdateLanguage() {
    return useContext(UpdateLanguageContext)
}

export function SearchProvider({ children }) {
   
    const [language, setLanguage] = useState('en');

  
    function changeLanguage(lang) {
        setLanguage(lang)
    }


    return (
        <LanguageContext.Provider value={language}>
            <UpdateLanguageContext.Provider value={changeLanguage}>
                        {children}
            </UpdateLanguageContext.Provider>
        </LanguageContext.Provider>)


}