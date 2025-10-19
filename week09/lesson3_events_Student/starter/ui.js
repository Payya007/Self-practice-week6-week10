// Lesson 3 - Events Starter

let quotes = [];

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

// Create a quote element in the DOM
function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.setAttribute("data-id", quote.id);

  const contentP = document.createElement("p");
  contentP.textContent = quote.content;
 const authorP = document.createElement("p");
  authorP.textContent = quote.author;
  
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.setAttribute("data-id", quote.id);
  editBtn.addEventListener("click", () => {
    updateQuoteInDOM(quote);
  }
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("data-id", quote.id);
  deleteBtn.addEventListener("click", () => {
    deleteQuoteFromDOM(quote.id);
  });

  div.appendChild(contentP);
  div.appendChild(authorP);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  quoteList.appendChild(div);
  
  return div;
  // a quote element example
    //<section id="quote-list">
    //  <div data-id="1">
    //    <p>Confidence comes from discipline and training</p>
    //    <p>Robert</p>
    //    <button class="edit-btn" data-id="1">
    //      Edit
    //    </button>
    //    <button class="delete-btn" data-id="1">
    //      Delete
    //    </button>
    //  </div>
    // </section>
}

// Fill form with quote data for editing
function updateQuoteInDOM(quote) {
 idInput.value = quote.id;
  contentInput.value = quote.content;
  authorInput.value = quote.author; 
    renderQuotes();
}

// Delete quote from array and re-render
function deleteQuoteFromDOM(id) {
 quotes=quotes.filter((quote) => quote.id !==id)
 renderQuotes();
}

// Render all quotes to the DOM
function renderQuotes() {
quoteList.innerHTML = "";
quoteList = quotes.forEach((q)=>{
  let  p = createQuoteElement(q);
  quoteList.appendChild(p);
})
  
}

// Display a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    randomDisplay.textContent = "No quotes yet!";
    return;
  }

  const random = quotes[Math.floor(Math.random() * quotes.length)];
  randomDisplay.innerHTML = `<blockquote>"${random.content}"</blockquote><p>— ${random.author}</p>`;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;

  if (content === "" || author === "") return;

  if (id) {
    // Update existing quote
    quotes = quotes.map((q) =>
      q.id === id ? { id, content, author } : q
    ); // ถ้ามันมีแล้วในระบบ ก็ไม่ต้องสร้างใหมา่
  } else {
    // Add new quote
    const newQuote = {
      id: Date.now().toString(),
      content,
      author,
    }; // ถ้าไม่มีก็สร้างใหม่
    quotes.push(newQuote); 
  }

  renderQuotes();
  form.reset();
  idInput.value = "";
});

// Show random quote when button is clicked
randomBtn.addEventListener("click", showRandomQuote);