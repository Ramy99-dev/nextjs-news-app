import React , {useContext, useState} from 'react';



const SearchContext = React.createContext();
const UpdateSearchContext = React.createContext();

export function useSearch()
{
    return useContext(SearchContext)
}

export function useSearchUpdate()
{
    return useContext(UpdateSearchContext)
}

export function SearchProvider({children})
{
    const [searchWord , setSearchWord] = useState('');

    function changeSearchWord(word)
    {
        setSearchWord(word)
    }
    
    return (<SearchContext.Provider value={searchWord}>
              <UpdateSearchContext.Provider value={changeSearchWord}>
                  {children}
              </UpdateSearchContext.Provider>
            </SearchContext.Provider>)
    
    
}