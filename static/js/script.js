function appendMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + type;
    messageDiv.innerHTML = "<p>" + message + "</p>";
    document.getElementById("messages").appendChild(messageDiv);
    document.getElementById("messages").scrollTop =
        document.getElementById("messages").scrollHeight;
}

async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    appendMessage(userInput, "user");
    document.getElementById("userInput").value = "";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        const botResponse = data.response;
        appendMessage(botResponse, "bot");
    } catch (error) {
        console.error("Error:", error);
    }
}

document
    .getElementById("userInput")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
