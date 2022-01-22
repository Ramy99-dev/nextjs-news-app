export const Fetch = async(question,topic,language,page)=>{

    let data = null ; 
    console.log(question)
    if(!topic)
    {
         data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${question}&lang=${language}&page_size=8&page=${page}`, {
            method: 'GET',
            headers: {
              "x-api-key": "lohdLGXKQ6x_I_0uZ5AdHjQG8id8NCuWinDtB_Mcp4U"
            }
          });   
    }
    else{
         data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${question}&lang=${language}&page_size=8&page=${page}&topic=${topic}`, {
        method: 'GET',
        headers: {
          "x-api-key": "lohdLGXKQ6x_I_0uZ5AdHjQG8id8NCuWinDtB_Mcp4U"
        }
      });
    }
  
      const newsList = await data.json();
  
      console.log(newsList)
      let searchWord = [];
      newsList?.articles?.map((n) => {
        searchWord.push(n);
  
      })

      return  searchWord;

}