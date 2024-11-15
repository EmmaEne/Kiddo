// pronunciation.js
const bubbleTexts = ["Hello", "Friend", "Smart", "Nice", "Kind", "Good", "Smile"];
const sentences = {
    Hello: "Say 'Hello, friend!'",
    Friend: "Say 'You're a great friend!'",
    Smart: "Say 'I am very smart!'",
    Nice: "Say 'It's nice to meet you!'",
    Kind: "Say 'I am kind and caring!'",
    Good: "Say 'Good job!'",
    Smile: "Say 'I love to smile!'",
    Friend: "Say 'You're a great friend!'",
    Smart: "Say 'I am very smart!'",
    Nice: "Say 'It's nice to meet you!'",
};

function createBubbles() {
    const container = document.getElementById('bubblesContainer');
    
    for (let i = 0; i < 15; i++) { // Creates 15 bubbles
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Randomly assign color
        if (Math.random() > 0.5) bubble.classList.add('orange');
        else bubble.classList.add('purple');

        // Random text from bubbleTexts array
        const text = bubbleTexts[Math.floor(Math.random() * bubbleTexts.length)];
        bubble.innerText = text;
        bubble.dataset.sentence = sentences[text];

        // Adjusted random positioning and spacing
        bubble.style.left = `${5 + Math.random() * 90}vw`;
        bubble.style.bottom = `${Math.random() * 10}vh`;
        bubble.style.width = `${60 + Math.random() * 20}px`;
        bubble.style.height = bubble.style.width;

        // Set unique animation delay
        bubble.style.animationDelay = `${Math.random() * 20}s`; // Delay between 0-5 seconds

        // Add click event
        bubble.addEventListener('click', () => {
            let parrot = document.getElementById('parrot');
            
            if (parrot) { // Ensure parrot element exists
                parrot.setAttribute("src", "images/purple-parrot-mouth-open-removebg-preview.png"); // Ensure image path is correct
            }
        
            stopBubbles();
            displaySentence(bubble.dataset.sentence);
        });
        

        container.appendChild(bubble);
    }
}

function stopBubbles() {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.animationPlayState = 'paused';
    });
}

function displaySentence(sentence) {
    const fortuneCookie = document.getElementById('fortuneCookie');
    document.getElementById('sentenceDisplay').innerText = sentence;
    fortuneCookie.style.display = 'block';
}

function closeCookie() {
    document.getElementById('fortuneCookie').style.display = 'none';
    resumeBubbles();
    let parrot = document.getElementById('parrot');
            
    if (parrot) { // Ensure parrot element exists
        parrot.setAttribute("src", "images/purple_bird-removebg-preview.png"); // Ensure image path is correct
    }
}

function resumeBubbles() {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.animationPlayState = 'running';
    });
}

// Initialize bubbles on page load
window.onload = createBubbles;
