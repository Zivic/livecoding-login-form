import { useState } from "react";
import "./App.css";

/* 
      additional things i've done:
- removed unnecessary handleEmail and handlePassword functions, after moving the logic into the onSubmit, 
  the only thing they were really doing is setting the state, which is nnow done inline, in the event handler.
- The source of the bug (onSubmit not being called) was that we had an input of type "email" which means some 
  internal validation mechanism is being used to determine validity , blocking the the onSubmit handler from being called in the first place.
  Replacing it with a input of type text gives us the expected behavior and uses our custom validation instead.
- Fixed the styling
- Added alert on successful login
- I didn't really get a chance to make any components, but after adding labels to the inputs i can see the option to potentially combine 
  the label, input, and error span, along with the state and error state into a reusable react component, 
  in a real case we would most likely use a form/validation library
*/

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  console.log(email);
  console.log(password);

  //login form
  //styling
  //email and password
  //validation  - red field or message

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isEmailValid = regex.test(email);
    const isPasswordValid = password.length > 10;

    isEmailValid ? setEmailError(null) : setEmailError("Email is not valid");

    isPasswordValid
      ? setPasswordError(null)
      : setPasswordError("Password is not valid");

    if (isEmailValid && isPasswordValid) {
      alert("successful login!");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Live coding - Login form</h1>

        <form onSubmit={handleSubmit}>
          <label for="emailInput">Email:</label>
          <input
            id="emailInput"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span>{emailError}</span>}

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span>{passwordError}</span>}

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
