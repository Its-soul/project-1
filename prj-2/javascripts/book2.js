// Sample Book Data with Enhanced Descriptions
const books = [
    {
        title: "Introduction to Algorithms",
        course: "💻 Computer Science",
        type: "🔥 Sell",
        price: 4500,
        condition: "📖 Good – Slightly used but well-maintained!",
        image: "../src/intro-algo.jpg",
        buyLink: "https://www.amazon.in/s?k=introduction+to+algorithms&crid=17XZ4OGMS8GAA&sprefix=introduction+to+al%2Caps%2C283&ref=nb_sb_ss_ts-doa-p_1_18" // Buy Now Link
    },
    {
        title: "Organic Chemistry",
        course: "🧪 Chemistry",
        type: "🔄 Exchange",
        price: 3000,
        condition: "✨ Like New – Almost untouched, crisp pages!",
        image: "../src/organic-chemistry.jpg",
        buyLink: "https://www.amazon.in/Organic-Chemistry-Pearson-Yurkanis-Bruice/dp/9353948452/ref=sr_1_1_sspa?crid=2PTSQWLB3L6JY&dib=eyJ2IjoiMSJ9.lDTk6Rot7g2H9FPwapuOYb3MY98F8BGWE0A0xh8wcZI48c41JSLzCFpavngcVHfrmmPJytrWTup4O0isvyBwT4bGsLqq_rZd-BV1ff9eWX8of1TaGw0cFlov3P5-IWLVaft0uGnRPLNuXPQdMkjr1ukvvtcjiITBXAwloiW7oNqr-RQM-FeiOQsIW0CVt-eq-zx6P3A0k-h71uiEBJYORDNpFimN6TIgC6rYkIwr-Mw.nYIag3iXIh1SGi3duhQVR6xlTEi7WQEHku55PFMcD-0&dib_tag=se&keywords=organic+chemistry&qid=1742623826&sprefix=organic+chemistry%2Caps%2C274&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" // Buy Now Link
    },
    {
        title: "Calculus Made Easy",
        course: "📊 Mathematics",
        type: "🤝 Request",
        price: 2500,
        condition: "📘 Fair – Some marks but fully readable!",
        image: "../src/calculus-made-easy.jpg",
        buyLink: "https://www.amazon.in/Calculus-Made-Easy-Silvanus-Thompson/dp/9351448312/ref=sr_1_1_sspa?crid=2P7XKH6YEK7LO&dib=eyJ2IjoiMSJ9.-uwahkgbGWl1EFq5ns0jifJ0HcpydAHDN3t2uGEIyvpSZQFuDUnhgbjM0R0C44tnt7fUaNyPAZ0DGlOg6rc7w8hc3SgU8JHZZH1ap8xT-B9FQnjaHyFkdrxz2TIt0YGW4RE5oLpibdSbCYqDvU5v9n-8r44MNODNWPCWAeLJD-4VRkmFm3nD8IPwEoZUhH47bRcd4BZ8jvfbo_f86QLaLPpCn5U_V222y5A2Ji1DdyY.sBuePtgWq_WCpjAcYG10dbZFljvpqZkj0Aealp9TbIA&dib_tag=se&keywords=calculus+made+easy&qid=1742623868&sprefix=calculus+made+easy%2Caps%2C265&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" // Buy Now Link
    },
    {
        title: "Physics for Scientists",
        course: "🛰️ Physics",
        type: "💰 Sell",
        price: 5000,
        condition: "🌟 Excellent – As good as new!",
        image: "../src/physics-sci.jpg",
        buyLink: "https://www.amazon.in/Engg-Physics-1-QB-GBTU/dp/8131789152/ref=sr_1_5?crid=2HDTQSWPIZ9VA&dib=eyJ2IjoiMSJ9.xlHG_kJQrOUeHiVteMnFQzdhvcDExljqOiq4tXVVfnuRDdFS7grZA8n7DE74sbech22cSpy0n_np_TGvpJi6X3hiGR3Ui85a6W1aUIU8q8rmUosPiCHUrqbjNOzID_RF__PWZBSJ4i2SihVarM061ZIHKZcqtQcxBOTED2Ir2IwOm6UzNAROhheRRuwGjnfuP3DUc1B07it-6UQgG5PIl9HpQA4HaWsqYdri9AnJNi0.Xe52z-otbBylOR775PpA8ac4Ff8_5iaTndXYE87mscE&dib_tag=se&keywords=physics+for+engg&qid=1742623892&sprefix=physics+for+engg%2Caps%2C287&sr=8-5" // Buy Now Link
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
            
            <!-- Buy Now Button -->
            <a href="${book.buyLink}" class="btn" target="_blank">🛒 Buy Now</a>
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
