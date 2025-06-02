import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="page">
      {/* Welcome section */}
      <div className="welcome">
        <div className="container">
          {/* Company logo */}
          <div className="logo">
            <Image
              src="/assets/UBS_BIG.D.svg"
              alt="UBS Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          
          {/* Welcome message */}
          <div className="message">
            <h1 className="title">
              <span className="highlight">Hi,</span>
              <span> I'm Inventory Analyzer AI</span>
            </h1>
            <h2 className="subtitle">Please select an agent below:</h2>
          </div>
          
          {/* Agent selection buttons */}
          <div className="buttons">
            <button className="primary-btn">
              <Image 
                src="/assets/summary.svg" 
                alt="Summary Icon" 
                width={20} 
                height={20} 
                className="icon"
              />
              Summary Agent
            </button>
            <button className="secondary-btn">
              <Image 
                src="/assets/chat.svg" 
                alt="Chatbot Icon" 
                width={20} 
                height={20} 
                className="icon"
              />
              Chatbot Agent
            </button>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="faq">
        <div className="faq-container">
          <div className="faq-card">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                What's my current stock levels?
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Show me low inventory items
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Generate monthly inventory report
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Optimize reorder points
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat input section */}
      <div className="chat-input">
        <div className="chat-container">
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Ask about your inventory..."
              className="textfield"
            />
            <button className="send-btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
