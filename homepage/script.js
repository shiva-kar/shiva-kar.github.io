const facts = [
    "I built a Unix-like shell to understand more about the terminal I use every day.",
    "I enjoy game development and experimenting with ideas in Godot and Unity.",
    "I’m interested in the connection between backend engineering and systems programming.",
    "A good debugging session can teach me more than a page of notes.",
    "I like projects that make me ask what the computer is doing behind the scenes."
];

const factText = document.querySelector("#fact-text");
const factButton = document.querySelector("#fact-button");

if (factText && factButton) {
    let currentFact = 0;

    factButton.addEventListener("click", () => {
        currentFact = (currentFact + 1) % facts.length;
        factText.textContent = facts[currentFact];
    });
}
