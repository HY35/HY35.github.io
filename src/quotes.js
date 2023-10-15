// Random Quotes


const quotes = [
    "#ef5777","#575fcf", "#4bcffa","#34e7e4","#0be881","#f53b57","#3c40c6","#0fbcf9","#00d8d6","#05c46b",
    "#ffc048","#ffdd59","#ff5e57","#d2dae2","#485460","#ffa801","#ffd32a","#ff3f34"
  ];
  
  const quoteMix = document.getElementById("quoteMix");
  
  function getRandomQuote() {
    const quotesIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
  }
  
  function setRandomQuote() {
    let quote, author;
  
    quote = getRandomQuote();
    author = getRandomAuthor();
    
  
    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    quoteMix.style.background = gradient;
  }
  
  colorMix.addEventListener("submit", setRandomGradient);