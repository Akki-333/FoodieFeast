import { Link } from "react-router-dom";
  import styles from "../src/Login.module.css";

  function Login() {
    const googleAuth = () => {};

    const handleLogin = () => {
      // Redirect to Wikipedia
      window.location.href = "";
      navigate("/"); 
    };

    return (
      <center>
        <div className={styles.container}>
          <h1 className={styles.heading}>Log in Form</h1>
          <div className={styles.form_container}>
            <div className={styles.left}>
              <img className={styles.img} src="./images/login.jpg" alt="login" />
            </div>
            <div className={styles.right}>
              <h2 className={styles.from_heading}>Members Log in</h2>
              <input type="text" className={styles.input} placeholder="Email" />
              <input
                type="password" // Change to "password" for security
                className={styles.input}
                placeholder="Password"
              />
              {/* Log In Button with redirect */}
              <button className={styles.btn} onClick={handleLogin}>
                Log In
              </button>
              <p className={styles.text}>
                New Here? <Link to="/sign">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    );
  }

  export default Login;