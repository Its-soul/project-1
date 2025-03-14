const books = [
    { 
        title: "Introduction to Algorithms", 
        author: "Thomas H. Cormen", 
        edition: "3rd", 
        course: "Learning C++", 
        price: 45, 
        condition: "Good" 
    },
    { 
        title: "Organic Chemistry", 
        author: "Paula Yurkanis Bruice", 
        edition: "7th", 
        course: "Chemistry", 
        price: 30, 
        condition: "Like New" 
    },
    { 
        title: "Calculus Made Easy", 
        author: "Silvanus P. Thompson", 
        edition: "2nd", 
        course: "Mathematics", 
        price: 25, 
        condition: "Fair" 
    }
];

const studyGroups = [
    { 
        name: "Coders", 
        course: "C++", 
        members: 15, 
        description: "A group for C++ enthusiasts to discuss DSA and problem-solving.",
        admin: "Sandeepp",
        schedule: "Every Saturday at 5 PM"
    },
    { 
        name: "Math-gen", 
        course: "Mathematics", 
        members: 23, 
        description: "Advanced mathematics discussions including calculus, algebra, and statistics.",
        admin: "Vaibhav",
        schedule: "Wednesdays at 3 PM"
    },
    { 
        name: "Newton", 
        course: "Physics", 
        members: 18, 
        description: "Exploring Newtonian mechanics, relativity, and quantum physics.",
        admin: "Ansh",
        schedule: "Mondays at 6 PM"
    }
];

// Populate Books Section
const booksGrid = document.querySelector('.books-grid');
books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <h4>${book.title}</h4>
        <p class="course-box">${book.course}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Edition:</strong> ${book.edition}</p>
        <p><strong>Price:</strong> Rs. ${book.price}</p>
        <p><strong>Condition:</strong> ${book.condition}</p>
        <button class="btn view-details">View Details</button>
    `;
    booksGrid.appendChild(bookCard);
});

// Redirect to "book.html" when View Details button is clicked
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'book2.html';
    });
});

// Populate Study Groups Section
const groupsGrid = document.querySelector('#groups .features-grid');
studyGroups.forEach(group => {
    const groupCard = document.createElement('div');
    groupCard.className = 'feature-card';
    groupCard.innerHTML = `
        <h3>${group.name}</h3>
        <p class="course-box">${group.course}</p>
        <p><strong>Members:</strong> ${group.members}</p>
        <p><strong>Description:</strong> ${group.description}</p>
        <p><strong>Admin:</strong> ${group.admin}</p>
        <p><strong>Schedule:</strong> ${group.schedule}</p>
        <button class="btn join-btn">Join Group</button>
    `;
    groupsGrid.appendChild(groupCard);
});

// Redirect to "group.html" when Join Group button is clicked
document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'group.html';
    });
});
