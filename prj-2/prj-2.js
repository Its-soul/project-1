const books = [
    { title: "Introduction to Algorithms", course: "learning C++", price: 45, condition: "Good" },
    { title: "Organic Chemistry", course: "Chemistry", price: 30, condition: "Like New" },
    { title: "Calculus Made Easy", course: "Mathematics", price: 25, condition: "Fair" }
];

const studyGroups = [
    { name: "Coders ", course: "C++", members: 15 },
    { name: " Math-gen ", course: "Mathematics", members: 23 },
    { name: "Newton", course: "Physics", members: 18 }
];

// Populate Books
const booksGrid = document.querySelector('.books-grid');
books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <h4>${book.title}</h4>
        <p>Course: ${book.course}</p>
        <p>Price: Rs: ${book.price}</p>
        <p>Condition: ${book.condition}</p>
        <button class="btn">View Details</button>
    `;
    booksGrid.appendChild(bookCard);
});

// Populate Study Groups
const groupsGrid = document.querySelector('#groups .features-grid');
studyGroups.forEach(group => {
    const groupCard = document.createElement('div');
    groupCard.className = 'feature-card';
    groupCard.innerHTML = `
        <h3>${group.name}</h3>
        <p>Course: ${group.course}</p>
        <p>Members: ${group.members}</p>
        <button class="btn">Join Group</button>
    `;
    groupsGrid.appendChild(groupCard);
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Functionality
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.book-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});