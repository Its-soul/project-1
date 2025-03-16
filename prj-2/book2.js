// Sample Book Data with Enhanced Descriptions
const books = [
    {
        title: "Introduction to Algorithms",
        course: "💻 Computer Science",
        type: "🔥 Sell",
        price: 4500,
        condition: "📖 Good – Slightly used but well-maintained!",
        image: "./src/intro-algo.jpg"
    },
    {
        title: "Organic Chemistry",
        course: "🧪 Chemistry",
        type: "🔄 Exchange",
        price: 3000,
        condition: "✨ Like New – Almost untouched, crisp pages!",
        image: "./src/organic-chemistry.jpg"
    },
    {
        title: "Calculus Made Easy",
        course: "📊 Mathematics",
        type: "🤝 Request",
        price: 2500,
        condition: "📘 Fair – Some marks but fully readable!",
        image: "./src/calculus-made-easy.jpg"
    },
    {
        title: "Physics for Scientists",
        course: "🛰️ Physics",
        type: "💰 Sell",
        price: 5000,
        condition: "🌟 Excellent – As good as new!",
        image: "./src/physics-sci.jpg"
    }
];

// Reference to the book grid container
const bookGrid = document.getElementById('bookGrid');

function renderBooks(filteredBooks) {
    bookGrid.innerHTML = ''; // Clear previous book cards

    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" style="width: 140px; height: 180px;">
            <h3>${book.title}</h3>
            <p><strong>📚 Course:</strong> ${book.course}</p>
            <p><strong>🔹 Type:</strong> ${book.type}</p>
            <p class="price"><strong>💰 Price:</strong> Rs ${book.price}</p>
            <p class="condition"><strong>✅ Condition:</strong> ${book.condition}</p>
            <a href="#" class="btn">📖 View Details</a>
        `;

        bookGrid.appendChild(bookCard);
    });
}


// Initial Render
renderBooks(books);

// Search & Filter Functionality
const searchInput = document.getElementById('searchInput');
const courseFilter = document.getElementById('courseFilter');
const typeFilter = document.getElementById('typeFilter');

function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const course = courseFilter.value;
    const type = typeFilter.value;

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                              book.course.toLowerCase().includes(searchTerm);
        const matchesCourse = course ? book.course === course : true;
        const matchesType = type ? book.type === type : true;
        return matchesSearch && matchesCourse && matchesType;
    });

    renderBooks(filteredBooks);
}

searchInput.addEventListener('input', filterBooks);
courseFilter.addEventListener('change', filterBooks);
typeFilter.addEventListener('change', filterBooks);
