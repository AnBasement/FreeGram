// Plans button
const plans = document.getElementById("plans");
plans.addEventListener("click", () => {
  plans.classList.add("clicked-button");
  setTimeout(() => {
    window.location.href = "plans.html";
  }, 300);
});

// GitHub repository button
const repo = document.getElementById("repo");
repo.addEventListener("click", () => {
  repo.classList.add("clicked-button");
  setTimeout(() => {
    window.open("https://github.com/AnBasement/FreeGram", "_blank");
  }, 300);
});

// Array of programming quotes
const quotes = [
  { 
    text: "The only way to learn a new programming language is by writing programs in it.", 
    author: "Dennis Ritchie" 
  },
  { 
    text: "First, solve the problem. Then, write the code.", 
    author: "John Johnson" 
  },
  { 
    text: "Programming isn’t about what you know; it’s about what you can figure out.", 
    author: "Chris Pine" 
  },
  { 
    text: "Programs must be written for people to read, and only incidentally for machines to execute.", 
    author: "Harold Abelson" 
  },
  { 
    text: "The best way to get a project done faster is to start sooner.", 
    author: "Jim Highsmith" 
  },
  { 
    text: "The most disastrous thing that you can ever learn is your first programming language.", 
    author: "Alan Kay" 
  },
  { 
    text: "Testing shows the presence, not the absence of bugs.", 
    author: "Edsger W. Dijkstra" 
  },
  { 
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", 
    author: "Bill Gates" 
  },
  { 
    text: "The sooner you start to code, the longer the program will take.", 
    author: "Roy Carlson" 
  },
  { 
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 
    author: "Martin Fowler" 
  }
];

// Quote functionality
const ANIMATION_DURATION = 800; // Animation duration in milliseconds

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuoteAnimation(elements, animationClass) {
  elements.forEach(el => {
    el.className = '';
    el.classList.add(animationClass);
  });
}

function rotatingQuote() {
  const quote = randomQuote();
  const quoteElements = [
    document.getElementById("quote-text"),
    document.getElementById("quote-author")
  ];

  // Start exit animation
  setQuoteAnimation(quoteElements, "quote-exit");

  // After exit completes, update content and enter
  setTimeout(() => {
    quoteElements[0].textContent = `"${quote.text}"`;
    quoteElements[1].textContent = `- ${quote.author}`;

    // Start enter animation
    setQuoteAnimation(quoteElements, "quote-enter");

    // After enter completes, set to visible state
    setTimeout(() => {
      setQuoteAnimation(quoteElements, "quote-visible");
    }, ANIMATION_DURATION);
  }, ANIMATION_DURATION);
}

// Initialize quotes when page loads
document.addEventListener('DOMContentLoaded', function() {
  const quoteElements = [
    document.getElementById("quote-text"),
    document.getElementById("quote-author")
  ];
  
  // Set initial visible state
  setQuoteAnimation(quoteElements, "quote-visible");
  
  // Start quote rotation
  rotatingQuote();
  setInterval(rotatingQuote, 8000);
});