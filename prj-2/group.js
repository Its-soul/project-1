const groups = [
    {
        name: "Data Science Enthusiasts",
        category: "Computer Science",
        description: `🔹 A community of students passionate about Data Science  
                      🔹 Discuss trending AI/ML topics  
                      🔹 Share datasets and learning resources  
                      🔹 Collaborate on real-world projects`,
        members: 20,
        image: "./src/data-sci.jpg"
    },
    {
        name: "Math Wizards",
        category: "Mathematics",
        description: `🔹 Collaborate on challenging math problems  
                      🔹 Solve complex equations with peers  
                      🔹 Participate in weekly math challenges  
                      🔹 Explore math applications in AI & programming  
                      🔹 Ace your exams with shared study materials`,
        members: 15,
        image: "./src/maths-wizard.jpg"
    },
    {
        name: "Organic Chemistry Group",
        category: "Chemistry",
        description: `🔹 A group for students tackling Organic Chemistry together  
                      🔹 Dive deep into reaction mechanisms  
                      🔹 Share study notes & practice problems  
                      🔹 Discuss organic synthesis strategies  
                      🔹 Prepare for exams with quizzes & group discussions`,
        members: 25,
        image: "./src/organic-chem.jpg"
    },
    {
        name: "Physics for Engineers",
        category: "Physics",
        description: `🔹 Discuss advanced physics concepts  
                      🔹 Solve numerical problems step-by-step  
                      🔹 Prepare for engineering exams with peers  
                      🔹 Explore real-world physics applications  
                      🔹 Access helpful study materials & video explanations`,
        members: 18,
        image: "./src/quantum-phy.jpg"
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

            <!-- First Join Group Button -->
            <a href="#" class="btn btn-join">Join Group</a>

            <div class="btn-container">
                <a href="#" class="btn btn-video">📹 Video Call</a>
                <a href="#" class="btn btn-voice">📞 Voice Call</a>
                <a href="#" class="btn btn-chat">💬 Chat</a>
                <a href="#" class="btn btn-info">ℹ️ Info</a>
            </div>
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