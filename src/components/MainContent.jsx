const MainContent = () => {
    return (
      <div className="containers">
        {/* First main content section */}
        <div className="main-content">
          <div className="text-content">
            <p>GramAi: Elevate Your Communication</p>
            <h1>Unlock Your Communication Potential with GramAi</h1>
            <div className="buttons">
              <a className="get-started" href="#">Get Started</a>
              <a className="unlock-voice" href="#">Unlock Your Voice</a>
            </div>
          </div>
          <div className="image-content">
          <img src="images/boyandgirltalking.jpg" alt="Illustration of two people communicating" width="600" height="400"></img>
            {/* <img src="/images/boyandgirltalking.jpg" alt="People Communicating" /> */}
          </div>
        </div>
        {/* Second main content section */}
        <div className="main-content reversed">
          <div className="image-content">
          
            <img src="/images/image2.jpg" alt="Illustration representing tailored coaching" width="600" height="400"></img>
          </div>
          <div className="text-content">
            <p>Tailored Coaching for Exceptional Communication</p>
            <h1>Enhance Your Skills with GramAi</h1>
            <p>At GramAi, we believe that effective communication is the foundation for personal and professional success.</p>
            <div className="buttons">
              <a className="get-started" href="#">Enhance Your Skills</a>
            </div>
          </div>
        </div>
  
        {/* Third main content section */}
        <div className="main-content">
          <div className="text-content">
            <p>Personalized Learning Experience</p>
            <h1>Master Communication with Tailored Feedback</h1>
            <p>Our AI-driven platform adapts to your unique needs, providing personalized feedback to help you achieve mastery in communication skills.</p>
            <div className="buttons">
              <a className="get-started" href="#">Start Improving</a>
            </div>
          </div>
          <div className="image-content">
            <img src="/images/image3.png" alt="Illustration showing personalized learning and feedback" width="600" height="400"></img>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default MainContent;
    