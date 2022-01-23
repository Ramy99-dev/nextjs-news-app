export const Fetch = async(question,topic,language,page)=>{

    let data = null ; 
    console.log(question)
    if(!topic)
    {
         data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${question}&lang=${language}&page_size=8&page=${page}`, {
            method: 'GET',
            headers: {
              "x-api-key": "OwBiuV9I9T6VhaDV-yONkS2hVnWXKrWmUppcjlkYT6E"
            }
          });   
    }
    else{
         data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${question}&lang=${language}&page_size=8&page=${page}&topic=${topic}`, {
        method: 'GET',
        headers: {
          "x-api-key": "OwBiuV9I9T6VhaDV-yONkS2hVnWXKrWmUppcjlkYT6E"
        }
      });
    }
  
      const newsList = await data.json();
  
      console.log(newsList)
      let searchWord = [];
      newsList?.articles?.splice(0,8).map((n) => {
        searchWord.push(n);
  
      })

      return  searchWord;

}