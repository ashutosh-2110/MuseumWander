function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message){
        // Display user message in chat window
        const messagesDiv = document.getElementById('chatbot-messages');
        const userMsg = document.createElement('p');
        userMsg.classList.add('chatbot-msg');
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);

        // Auto-scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Respond from chatbot
        setTimeout(() => {
            const botMsg = document.createElement('p');
            botMsg.classList.add('chatbot-msg');
            
            // Simple response logic (can be expanded)
            if (message.toLowerCase().includes("ticket")) {
                botMsg.textContent = "You can book tickets under the 'Buy Tickets' section.";
            } else if (message.toLowerCase().includes("event")) {
                botMsg.textContent = "Check out the Events page for our latest exhibits.";
            } else {
                botMsg.textContent = "I'm here to assist with museum details and ticket booking.";
            }

            messagesDiv.appendChild(botMsg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);

        // Clear the input field
        input.value = '';
    }
    
}
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message) {
        // Display user message on the right side
        const messagesDiv = document.getElementById('chatbot-messages');
        const userMsg = document.createElement('p');
        userMsg.classList.add('chatbot-msg', 'user');  // Add 'user' class
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);

        // Auto-scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Respond from chatbot
        setTimeout(() => {
            const botMsg = document.createElement('p');
            botMsg.classList.add('chatbot-msg', 'bot');  // Add 'bot' class
            
            // Simple response logic (can be expanded)
            if (message.toLowerCase().includes("ticket")) {
                botMsg.textContent = "You can book tickets under the 'Buy Tickets' section.";
            } else if (message.toLowerCase().includes("event")) {
                botMsg.textContent = "Check out the Events page for our latest exhibits.";
            } else {
                botMsg.textContent = "I'm here to assist with museum details and ticket booking.";
            }

            messagesDiv.appendChild(botMsg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);

        // Clear the input field
        input.value = '';
    }
}
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message) {
        // Display user message on the right side
        const messagesDiv = document.getElementById('chatbot-messages');
        const userMsg = document.createElement('p');
        userMsg.classList.add('chatbot-msg', 'user');  // Add 'user' class
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);

        // Auto-scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Respond from chatbot
        handleBotResponse(message);

        // Clear the input field
        input.value = '';
    }
}

function handleBotResponse(userMessage) {
    const messagesDiv = document.getElementById('chatbot-messages');
    
    // Create bot response element
    const botMsg = document.createElement('p');
    botMsg.classList.add('chatbot-msg', 'bot');  // Add 'bot' class
    
    // Simple response logic (expandable)
    let response = "";
    if (userMessage.toLowerCase().includes("ticket")) {
        response = "You can book tickets under the 'Buy Tickets' section. Would you like to know more?";
        displaySuggestions(["Buy Tickets", "Ticket Prices", "Event Details"]);
    } else if (userMessage.toLowerCase().includes("event")) {
        response = "Here are some upcoming events. Would you like more details?";
        displaySuggestions(["Modern Art Exhibition", "Ancient Egypt", "Dinosaurs Exhibit"]);
    } else {
        response = "I'm here to assist with museum details and ticket booking.";
        displaySuggestions(["Buy Tickets", "Upcoming Events", "Opening Hours"]);
    }

    // Append bot message to the chat
    botMsg.textContent = response;
    messagesDiv.appendChild(botMsg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function displaySuggestions(suggestions) {
    const suggestionDiv = document.getElementById('chatbot-suggestions');
    
    // Clear previous suggestions
    suggestionDiv.innerHTML = '';

    // Create new suggestion buttons
    suggestions.forEach(suggestion => {
        const btn = document.createElement('button');
        btn.classList.add('suggestion-btn');
        btn.textContent = suggestion;
        btn.onclick = () => {
            // Simulate user sending the suggestion
            document.getElementById('chatbot-input').value = suggestion;
            sendMessage();
        };
        suggestionDiv.appendChild(btn);
    }
    )
}
