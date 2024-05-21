import "./App.css";
import React, { useState } from "react";
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";
import TextForm from "./component/TextForm.jsx";
import Alert from "./component/Alert.jsx";
import Contact from "./component/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    /* Object created to set alert : */
    setAlert({
      msg: message,
      type: type,
    });

    /* Auto dismissing the alert after some time : */
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      /* -------agar title chamkana ho evil app banane  ke liye setInterval-------*/
      // setInterval(() => {
      //   document.title = 'Text Utils Is Amazing';
      // }, 1900);
      // setInterval(() => {
      //   document.title = 'Install Text Utils';
      // }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
          <Route exact path="/" element={<TextForm
            heading="TextUtis - Word Counter, Character Counter, Remove Extra Space"
            summaryHead="Summary Of Your Text"
            mode={mode}
            showAlert={showAlert}
          />} />
        </Routes>
        <Footer creatername="Akanksha Dubey" />
      </Router>
    </>
  );
}

export default App;
