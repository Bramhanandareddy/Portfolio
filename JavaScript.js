// Array of quotations and authors
const quotations = [
    {
        quote: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
        author: "Norman Augustine"
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson"
    },
    {
        quote: "The best software developers are artists who understand the science of programming.",
        author: "Robert C. Martin"
    },
    {
        quote: "Software is a great combination of artistry and engineering." ,
        author:"Bill Gates"
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "arold Abelson"
    },
    {
                
        quote: "The best software developers are artists who understand the science of programming.",
        author: "Robert C. Martin"
    },
    {           
        quote: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
        author: "Norman Augustine"        
    },
    {
        quote: "In software, the key is to express yourself in the simplest form possible.",
        author: "Bhavin Turakhia"
    },
    {
        quote: "Software developers are the modern-day magicians, turning ideas into reality with lines of code.",
        author:" "
    },
    {
        quote:"Software development is not just about writing code; it's about creating something that empowers and enriches people's lives.",
        author: " "
    },
    {       
        quote:"Software is a living thing that evolves with every line of code written.",
        author: " "
    },
    { 
        quote:"Software development is not just a job; it's a passion for crafting solutions that shape the world.",
        author: " "
    },
    {       
        quote:"Software developers are architects of the digital world, building the foundations of the future.",
        author: " "
    },
    // Add more quotations here
];

// Function to display a random quotation
function displayRandomQuotation() {
    const randomIndex = Math.floor(Math.random() * quotations.length);
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    quoteElement.textContent = quotations[randomIndex].quote;
    authorElement.textContent = "- " + quotations[randomIndex].author;
}

// Call the function initially to display a quotation
displayRandomQuotation();

// Set a timer to change the quotation every 60 seconds
setInterval(displayRandomQuotation, 6000);
// Your existing JavaScript code

// Add this JavaScript code to add click event to degree photos
const degreePhotos = document.querySelectorAll(".degree-photos img");

degreePhotos.forEach(photo => {
    photo.addEventListener("click", () => {
        window.open(photo.src, "_blank");
    });
});
