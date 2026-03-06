import { useNavigate } from "react-router-dom";

function CreateAccount(){

  const navigate = useNavigate();

  return(
    <div className="create-container">

      <h2>Create your PopX account</h2>

      <input type="text" placeholder="Full Name*" />
      <input type="number" placeholder="Phone number*" />
      <input type="email" placeholder="Email address*" />
      <input type="password" placeholder="Password*" />
      <input type="text" placeholder="Company name" />

      <div className="agency">
        <p>Are you an Agency?*</p>

        <label>
          <input type="radio" name="agency"/> Yes
        </label>

        <label>
          <input type="radio" name="agency"/> No
        </label>
      </div>

      <button 
        className="create-btn"
        onClick={()=> navigate("/accountSetting")}
      >
        Create Account
      </button>

    </div>
  );
}

export default CreateAccount;