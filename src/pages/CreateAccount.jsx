import { useNavigate } from "react-router-dom";

function CreateAccount(){

  const navigate = useNavigate();

  return(
    <div className="create-page">

      <h1 className="create-title">
        Create your <br /> PopX account
      </h1>

      <div className="form-group">
        <label>Full Name<span>*</span></label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="form-group">
        <label>Phone number<span>*</span></label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="form-group">
        <label>Email address<span>*</span></label>
        <input type="email" placeholder="Marry Doe" />
      </div>

      <div className="form-group">
        <label>Password<span>*</span></label>
        <input type="password" placeholder="Marry Doe" />
      </div>

      <div className="form-group">
        <label>Company name</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="agency-section">
        <p>Are you an Agency?<span>*</span></p>

        <div className="radio-group">
          <label>
            <input type="radio" name="agency" defaultChecked />
            Yes
          </label>

          <label>
            <input type="radio" name="agency" />
            No
          </label>
        </div>
      </div>

      <button
        className="submit-btn"
        onClick={() => navigate("/AccountSettings")}
      >
        Create Account
      </button>

    </div>
  );
}


export default CreateAccount;