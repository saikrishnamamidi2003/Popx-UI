import { useNavigate } from "react-router-dom";

function Welcome(){
    const navigate = useNavigate();
    return(
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome to PopX</h1>
                <p>Lorem ipusm dolor sit amet, consectetur asipiscing elit,
                </p>

                <button
                 className="create-btn" 
                 onClick={()=> navigate("/createAccount")}
                 >
                  Create Account
                </button>

                <button className="login-btn" onClick={()=> navigate("/accountSetting")}>
                    Already Registered? Login
                </button>

            </div>

        </div>
    );
}
export default Welcome;