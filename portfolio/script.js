document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const dynamicText = document.getElementById("dynamic-text");
    const text = "Protecting the digital frontier, one bit at a time...";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            dynamicText.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const dynamicText = document.getElementById("dynamic-text");
    const text = "Protecting the digital frontier, one bit at a time...";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            dynamicText.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    // Skill Bar Hover Effect
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", function () {
            const progress = skill.querySelector(".progress");
            progress.style.width = progress.getAttribute("data-skill-level");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect for About Me Section
    const terminalText = document.getElementById("terminal-text");
    const textLines = [
        "Initializing portfolio...",
        "User: Aspiring Cybersecurity Specialist",
        "Skills: Penetration Testing, Cryptography, Network Security",
        "Goal: Securing the digital world, one exploit at a time.",
        "Loading projects...",
        ">>> Welcome to my portfolio!"
    ];

    let currentLine = 0;
    let currentChar = 0;

    function typeEffect() {
        if (currentLine < textLines.length) {
            if (currentChar < textLines[currentLine].length) {
                terminalText.innerHTML += textLines[currentLine].charAt(currentChar);
                currentChar++;
                setTimeout(typeEffect, 50); // Adjust speed here
            } else {
                terminalText.innerHTML += "<br>"; // Add new line
                currentChar = 0;
                currentLine++;
                setTimeout(typeEffect, 500); // Pause before next line
            }
        }
    }

    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach(skillBar => {
        const fill = skillBar.querySelector(".fill");
        const level = skillBar.getAttribute("data-level");

        // Apply the level as width after a slight delay
        setTimeout(() => {
            fill.style.width = `${level}%`;
        }, 500);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30a0 + Math.random() * 96);
            const x = index * 20;
            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            } else {
                drops[index] += 20;
            }
        });
    }

    setInterval(drawMatrix, 50);
});
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fading effect for trails
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0"; // Neon green text
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30a0 + Math.random() * 96);
            const x = index * fontSize;

            ctx.fillText(text, x, y);

            // Randomly reset drop to the top, creating a continuous rain effect
            if (y > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            } else {
                drops[index] += fontSize;
            }
        });
    }

    // Animate the matrix effect
    setInterval(drawMatrix, 50);

    // Adjust canvas size on window resize
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops.length = Math.floor(canvas.width / fontSize);
        drops.fill(0);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    // Set canvas size to cover the entire screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas(); // Initial canvas size
    window.addEventListener("resize", resizeCanvas); // Update canvas size on window resize

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fade effect for trails
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0"; // Neon green text
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30a0 + Math.random() * 96); // Random Japanese characters
            const x = index * fontSize;

            ctx.fillText(text, x, y);

            // Randomly reset drops to the top of the screen
            if (y > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            } else {
                drops[index] += fontSize;
            }
        });
    }

    // Continuously draw the matrix effect
    setInterval(drawMatrix, 50);
});
