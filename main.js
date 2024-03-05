var quotes =[];
var colors=["#C62828","#AD1457","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#004D40","#1B5E20","#F9A825","#E65100","#263238"];

function GetQuotes(){ //alıntıları çektiğimiz fonksiyon
    return fetch("https://type.fit/api/quotes") // api adresi çektiğimiz veriler
    .then(response => response.json())
    .then(data =>{
        quotes=data;// gelen datayı quotes içerisine yazacak!
        Change();
    })

}
function Change(){
    var count = quotes.length; //  kaç data var ,verilerin sayısını  buluyoruz
    var rndNumb=Math.floor(Math.random()*count);
    document.getElementById('text').innerText=quotes[rndNumb].text;
    document.getElementById('author').innerText="-"+quotes[rndNumb].author;
    var  rndColorNumb= Math.floor(Math.random()*12);
    document.body.style.backgroundColor=colors[rndColorNumb];


}
 
function ShareTweet(){ // Twitter paylaşma
    var text= document.getElementById('text').innerText;
    window.location.href= 'https://twitter.com/intent/tweet?hashtags=senayyazilim&text='
    +encodeURIComponent('"'+text+'"');// bir sayfaya yönlendirme yapmak istedğimizde kullanıyoruz.

}
GetQuotes();
