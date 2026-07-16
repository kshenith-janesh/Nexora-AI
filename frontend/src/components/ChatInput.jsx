import { useState } from "react";
import { sendMessage } from "../services/api";
import "../styles/ChatInput.css";


function ChatInput({ setMessages, setIsTyping }) {

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSend = async () => {

        if (!input.trim() || loading) return;


        const userMessage = input;


        // Show user message immediately
        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userMessage
            }
        ]);


        setInput("");
        setLoading(true);
        setIsTyping(true);


        try {

            // Send message to FastAPI
            const response = await sendMessage(userMessage);


            // Show AI response
            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: response
                }
            ]);

        } 
        catch(error) {

            console.error("Error:", error);

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "Sorry, something went wrong."
                }
            ]);

        }


        setIsTyping(false);
        setLoading(false);
    };


    return (

        <div className="chat-input">

            <input
                type="text"
                placeholder="Ask Nexora AI anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleSend();
                    }
                }}
            />


            <button onClick={handleSend}>
                {loading ? "..." : "Send"}
            </button>

        </div>

    );
}


export default ChatInput;