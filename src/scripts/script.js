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

// Pull a random quote from the array
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Update the quote on the page
function rotatingQuote() {
  const q = randomQuote();
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");

  // Remove visible state and slide out to left
  quoteTextEl.classList.remove("quote-visible");
  quoteAuthorEl.classList.remove("quote-visible");
  quoteTextEl.classList.add("quote-exit");
  quoteAuthorEl.classList.add("quote-exit");

  // After exit animation, update content and slide in from right
  setTimeout(() => {
    quoteTextEl.textContent = `"${q.text}"`;
    quoteAuthorEl.textContent = `- ${q.author}`;

    // Remove exit classes, set up entry from right
    quoteTextEl.classList.remove("quote-exit");
    quoteAuthorEl.classList.remove("quote-exit");
    quoteTextEl.classList.add("quote-enter");
    quoteAuthorEl.classList.add("quote-enter");

    // Small delay before sliding to visible
    setTimeout(() => {
      quoteTextEl.classList.remove("quote-enter");
      quoteAuthorEl.classList.remove("quote-enter");
      quoteTextEl.classList.add("quote-visible");
      quoteAuthorEl.classList.add("quote-visible");
    }, 50);
  }, 600);
}

// Initialize quotes on page load
document.addEventListener('DOMContentLoaded', function() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");
  
  // Set initial visible state
  quoteTextEl.classList.add("quote-visible");
  quoteAuthorEl.classList.add("quote-visible");
  
  // Show first quote immediately
  rotatingQuote();
  
  // Rotate quotes every 8 seconds
  setInterval(rotatingQuote, 8000);
});