// Sample Book Data
const books = [
    {
        title: "Introduction to Algorithms",
        course: "Computer Science",
        type: "Sell",
        price: 4500,
        condition: "Good",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Organic Chemistry",
        course: "Chemistry",
        type: "Exchange",
        price: 3000,
        condition: "Like New",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Calculus Made Easy",
        course: "Mathematics",
        type: "Request",
        price: 2500,
        condition: "Fair",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Physics for Scientists",
        course: "Physics",
        type: "Sell",
        price: 5000,
        condition: "Excellent",
        image: "https://via.placeholder.com/150"
    }
];

// Populate Books
const bookGrid = document.getElementById('bookGrid');

function renderBooks(filteredBooks) {
    bookGrid.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Course: ${book.course}</p>
            <p>Type: ${book.type}</p>
            <p class="price">Price: Rs ${book.price}</p>
            <p class="condition">Condition: ${book.condition}</p>
            <a href="#" class="btn">View Details</a>
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