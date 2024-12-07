import effactive from '/assets/images/effactive_com.jpg'
import personalsucc from '/assets/images/personal_suc.jpeg.jpg'
import successpro from '/assets/images/Success_pro.png'
const MissionSection = () => {
    return (
      <div className="mission-container">
        <div className="title">About GramAi</div>
        <div className="mission">Our Mission</div>
        <div className="description">
          Our mission at GramAi is to revolutionize the way people communicate...
        </div>
  
        <div className="cards">
          <div className="card">
            <div className="card-text">
            <img src={effactive} alt="Illustration representing tailored coaching" width="200" height="200"></img>
            <br></br>
            A person should be able to communicate cofidently
            </div>
          </div>
          <div className="card">
            <div className="card-text">
            <img src={personalsucc} alt="Illustration representing tailored coaching" width="200" height="200"></img>
            <br></br>
            Personal success: stay confident, learn more, keep trying.
            </div>
          </div>
          <div className="card">
            <div className="card-text">
            <img src={successpro} alt="Illustration representing tailored coaching" width="200" height="200"></img>
            <br></br>
            professional success: stay focused, build connections.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MissionSection;
  