const responses = [
    "I don't know, I am the stupid Archi IA.",
    "Sorry, I'm just the dumb Archi bot.",
    "I'm not sure, I'm a simple Archi IA.",
    "Oops! I have no clue, I'm just Archi IA.",
    "I don't have the answer, I'm just a stupid bot.",
    "I don't know anything, I am Archi the IA.",
    "Sorry, I can't help, I am Archi IA.",
    "I don't understand, I'm just the Archi IA.",
    "I have no idea, I'm just Archi IA.",
    "Hmm, I don't know, I am Archi IA."
];

const nonQuestionResponses = [
    "Well, I didn’t quite catch that... What exactly was your question?",
    "Hmm, I think I missed your point... Could you clarify your question?",
    "Uh, I'm not sure I understand... What was your actual question?",
    "Sorry, I didn’t get it. Can you please rephrase your question?",
    "Well, that doesn’t seem like a question... Could you ask me again?",
    "I’m not sure what you're asking... What was your question?",
    "I think I’m lost here... Can you restate your question?",
    "I’m a bit confused... Could you clarify your question for me?",
    "Hmm, looks like I didn’t quite follow... What is your question?",
    "Well, I didn't get that... Could you repeat your question?"
];

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const userInput = inputField.value.trim();
    const gptBoostChecked = document.getElementById('gptBoost').checked;
    
    if (userInput !== '') {
        const chatBox = document.getElementById('chatBox');
        
        // User message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        
        // Bot response
        const botMessage = document.createElement('div');
        botMessage.classList.add('message');
        
        if (gptBoostChecked) {
            botMessage.textContent = "GPT stinks 🐽";
        } else {
            // Check if the input ends with a question mark
            if (userInput.endsWith('?')) {
                // Get a random response from the predefined list
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                botMessage.textContent = randomResponse;
            } else {
                // Get a random response from the non-question responses
                const randomNonQuestionResponse = nonQuestionResponses[Math.floor(Math.random() * nonQuestionResponses.length)];
                botMessage.textContent = randomNonQuestionResponse;
            }
        }
        
        chatBox.appendChild(botMessage);
        
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        inputField.value = '';
    }
}
