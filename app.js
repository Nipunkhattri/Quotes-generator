let quotesrealdata = "";
const quotetext = document.querySelector(".quote_area");
const quoteauthor = document.querySelector(".author");
quotetext.innerHTML="click on --New Quotes-- to get quotes";
console.log(quotetext);
const newquote = () => {
     let rnum = Math.floor(Math.random()*10);
     quotesrealdata = realData[rnum];
    //  console.log(realData[rnum].text);
    //  console.log(realData[rnum].author);
    quotetext.innerHTML =`${quotesrealdata.text}`
    quoteauthor.innerHTML =`${quotesrealdata.author}`
    // console.log(quotetext);
    // console.log(quoteauthor);
}
let realData = "";
const getquotes = async () =>{
    const api= "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        console.log(realData[0]);  
        newquote();
    } catch (error) {
        console.log("error");
    }
}
const func = document.getElementById('btn');

func.addEventListener("click" , function()
{
    document.getElementById("copy-btn").innerHTML = "Copy";
    getquotes();
});


function copyQuote()
{
  //  console.log(quotetext.innerHTML);
    
    let v = quotetext.innerHTML;
    //console.log(v);
    navigator.clipboard.writeText(v);

    document.getElementById("copy-btn").innerHTML = "Copied!";
}

