import cameraIcon from "../assets/cameraicon.png";
import marryImg from "../assets/marry-img.png";

function AccountSettings() {
  return (
    <div className="account-page">

      <h2 className="account-title">Account Settings</h2>

      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-img-wrapper">
            <img
              src={marryImg}
              alt="profile"
              className="profile-img"
            />

            <img
              src={cameraIcon}
              alt="camera"
              className="camera-icon"
            />
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>

        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
        
        <div className="bottom-divider"></div>

      </div>

      
    <div className="bottom-divider"></div>
    </div>
    
    
  );
}

export default AccountSettings;