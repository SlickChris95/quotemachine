 var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  


$(document).ready(function(){

var randomQuote;
var randomAuthor;
var randomNum;
  
function getQuote(){
var quotes = ["It's only after we've lost everything that we're free to do anything.", "A wise man can learn more from a foolish question than a fool can learn from a wise answer.","Do one thing every day that scares you.","When I let go of what I am, I become what I might be.","Everything you’ve ever wanted is on the other side of fear.","If opportunity doesn't knock, build a door","Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."];

var authors = ["-Chuck Palahniuk","-Bruce Lee","-Eleanor Roosevelt","-Lao Tzu","-Jack Canfield","-George Addair","-Milton Berle","-Steve Jobs"];
  
randomNum = Math.floor((Math.random() * quotes.length));
randomQuote = quotes[randomNum];
randomAuthor = authors[randomNum];
  
$(".quote").text(randomQuote);
$(".author").text(randomAuthor);
}
  
$(".btn").on("click",function(){
  getQuote();
$('#link').on(click,function(){
window.open("https://twitter.com/intent/tweet");
});
           });

 
  
  
                  });