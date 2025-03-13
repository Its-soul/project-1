// Sample group data
const groups = [
    {
        name: "Data Science Enthusiasts",
        category: "Computer Science",
        description: "A group of students interested in learning Data Science and sharing resources.",
        members: 20,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Math Wizards",
        category: "Mathematics",
        description: "Collaborate on challenging math problems and ace your exams.",
        members: 15,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Organic Chemistry Group",
        category: "Chemistry",
        description: "A group for students tackling Organic Chemistry topics together.",
        members: 25,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Physics for Engineers",
        category: "Physics",
        description: "Discuss advanced physics concepts and prepare for engineering exams.",
        members: 18,
        image: "https://via.placeholder.com/150"
    }
];

// Populate Groups
const groupGrid = document.getElementById('groupGrid');

function renderGroups(filteredGroups) {
    groupGrid.innerHTML = '';
    filteredGroups.forEach(group => {
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.innerHTML = `
            <img src="${group.image}" alt="${group.name}">
            <h3>${group.name}</h3>
            <p>${group.description}</p>
            <p class="group-details">${group.members} Members</p>
            <a href="#" class="btn">Join Group</a>
        `;
        groupGrid.appendChild(groupCard);
    });
}

// Initial Render
renderGroups(groups);

// Search & Filter Functionality
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function filterGroups() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredGroups = groups.filter(group => {
        const matchesSearch = group.name.toLowerCase().includes(searchTerm) ||
                              group.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category ? group.category === category : true;
        return matchesSearch && matchesCategory;
    });

    renderGroups(filteredGroups);
}

searchInput.addEventListener('input', filterGroups);
categoryFilter.addEventListener('change', filterGroups);
