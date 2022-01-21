import React, { useContext, useState } from 'react';



const SearchContext = React.createContext();
const LanguageContext = React.createContext();
const UpdateSearchContext = React.createContext();
const UpdateLanguageContext = React.createContext();

export function useSearch() {
    return useContext(SearchContext)
}

export function useSearchUpdate() {
    return useContext(UpdateSearchContext)
}
export function useLanguage() {
    return useContext(LanguageContext)
}
export function useUpdateLanguage() {
    return useContext(UpdateLanguageContext)
}

export function SearchProvider({ children }) {
    const [searchWord, setSearchWord] = useState('');
    const [language, setLanguage] = useState('en');

    function changeSearchWord(word) {
        setSearchWord(word)
    }
    function changeLanguage(lang) {
        setLanguage(lang)
    }


    return (
        <LanguageContext.Provider value={language}>
            <UpdateLanguageContext.Provider value={changeLanguage}>
                <SearchContext.Provider value={searchWord}>
                    <UpdateSearchContext.Provider value={changeSearchWord}>
                        {children}
                    </UpdateSearchContext.Provider>
                </SearchContext.Provider>
            </UpdateLanguageContext.Provider>
        </LanguageContext.Provider>)


}