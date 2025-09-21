// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [
    { id: 1, content: "To be or not to be", author: "Shakespeare" },
    { id: 2, content: "I think, therefore I am", author: "Descartes" },
    { id: 3, content: "The only thing we have to fear is fear itself", author: "F. D. Roosevelt" }
]

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
    quotes.push(quote)
    return quotes
}


/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const newQuotes = quotes.filter(p => p.id !== id)
        quotes.length =0        // เคลียร์ของเก่า
  quotes.push(...newQuotes)       // ใส่ array ใหม่กลับเข้าไป
  return quotes
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
    let re = quotes.find(p => p.id === id)
 
    if (re){
        if (updatedQuote.content) re.content = updatedQuote.content
        if (updatedQuote.author) re.author = updatedQuote.author
      
      return re
    }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
 
console.log(deleteQuote(2,quotes)) 
console.log("--------------------")

console.log(updateQuote(3,{ content: "none", author: "Franklin D. shhhhhhh" })) // Output: { id: 3, content: "The only thing we have to fear is fear itself", author: "Franklin D. Roosevelt" }
console.log("--------------------")
console.log(addQuote({ id: 4, content: "Life is what happens when you're busy making other plans", author: "John Lennon" })) // Output: undefined
console.log("--------------------")
console.log(getAllQuotes()) // Output: All quotes in the array