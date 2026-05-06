

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value
    };

    try {
        const response = await fetch("https://portfolio-backend-g8uj.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log("Response:", result);

        alert("Message sent successfully!");
        e.target.reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});


// Projects
const projects = [
    {
        title: "Portfolio Website",
        description: "Full-stack portfolio with MongoDB."
    },
    {
        title: "Student Project",
        description: "Project built during course."
    }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project");

    div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectList.appendChild(div);
});
