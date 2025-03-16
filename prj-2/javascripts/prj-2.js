// Sample Data
const books = [
    { 
        title: "Introduction to Algorithms", 
        author: "Thomas H. Cormen", 
        edition: "3rd", 
        course: "Learning C++", 
        price: 4500, 
        condition: "Good" 
    },
    { 
        title: "Organic Chemistry", 
        author: "Paula Yurkanis Bruice", 
        edition: "7th", 
        course: "Chemistry", 
        price: 3000, 
        condition: "Like New" 
    },
    { 
        title: "Calculus Made Easy", 
        author: "Silvanus P. Thompson", 
        edition: "2nd", 
        course: "Mathematics", 
        price: 2500, 
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
  
  books.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card card'; // Base class for book card
  
    // Add animation class based on index
    if (index % 3 === 0) {
        bookCard.classList.add('book-card-left-to-right'); // Slide from left
    } else if (index % 3 === 1) {
        bookCard.classList.add('book-card-bottom-to-top'); // Slide from bottom
    } else {
      bookCard.classList.add('book-card-right-to-left'); // Slide from right
    }
  
    bookCard.innerHTML = `
        <h4>${book.title}</h4>
        <p class="course-box">${book.course}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Edition:</strong> ${book.edition}</p>
        <p><strong>Price:</strong> Rs. ${book.price}</p>
        <p><strong>Condition:</strong> ${book.condition}</p>
        <button class="btn view-details" data-id="${index}">View Details</button>
    `;
    booksGrid.appendChild(bookCard);
  });
  
  // Event Delegation for View Details Buttons
  booksGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-details')) {
        const bookId = event.target.getAttribute('data-id');
        window.location.href = `book2.html?id=${bookId}`; // Pass book ID to the details page
    }
  });
  
  // Populate Study Groups Section
  const groupsGrid = document.querySelector('#groups .features-grid');
  
  studyGroups.forEach((group, index) => {
    const groupCard = document.createElement('div');
    groupCard.className = 'feature-card card'; // Base class for group card
  
    // Add animation class based on index
    if (index % 3 === 0) {
        groupCard.classList.add('feature-card-left-to-right'); // Slide from left
    } else if (index % 3 === 1) {
        groupCard.classList.add('feature-card-top-to-bottom'); // Slide from top
    } else {
        groupCard.classList.add('feature-card-right-to-left'); // Slide from right
    }
  
    groupCard.innerHTML = `
        <h3>${group.name}</h3>
        <p class="course-box">${group.course}</p>
        <p><strong>Members:</strong> ${group.members}</p>
        <p><strong>Description:</strong> ${group.description}</p>
        <p><strong>Admin:</strong> ${group.admin}</p>
        <p><strong>Schedule:</strong> ${group.schedule}</p>
        <button class="btn join-btn" data-id="${index}">Join Group</button>
    `;
    groupsGrid.appendChild(groupCard);
  });
  
  // Event Delegation for Join Group Buttons
  groupsGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('join-btn')) {
        const groupId = event.target.getAttribute('data-id');
        window.location.href = `group.html?id=${groupId}`; // Pass group ID to the details page
    }
  });
  
  // Scroll Animations using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
  // Observe all elements with the specified classes
  document.querySelectorAll('.card').forEach(el => {
    observer.observe(el);
  });
  
  let lastScrollTop = 0;  // Track the previous scroll position
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    // If scrolling down, trigger animations
    if (scrollTop > lastScrollTop) {
        const elements = document.querySelectorAll('.card, .rotate-heading, .bottom-to-top');
        
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('active');  // Add animation class when in viewport
            }
        });
    }
  
    // Update the last scroll position
    lastScrollTop = scrollTop;
  });
  
  // Trigger scroll event to check initial positions on load
  window.dispatchEvent(new Event('scroll'));