
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(date =>displayQuoute (date))
    
    

}
const displayQuoute = quote => {
    const blockQuote = document.getElementById("quote");

   
        blockQuote.innerText = quote.quote;
      
        
        
        
   
   
}
