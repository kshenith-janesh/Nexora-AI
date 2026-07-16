import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import "../styles/Home.css";


function Home() {

    const [messages, setMessages] = useState([]);

    const [isTyping, setIsTyping] = useState(false);


    return (

        <div className="home">

            <Sidebar
                onNewChat={() => setMessages([])}
                chatHistory={messages.map(msg => msg.text)}
                darkMode={false}
            />


            <div className="chat-section">

                <ChatWindow
                    messages={messages}
                    isTyping={isTyping}
                />


                <ChatInput
                    setMessages={setMessages}
                    setIsTyping={setIsTyping}
                />

            </div>

        </div>

    );
}


export default Home;