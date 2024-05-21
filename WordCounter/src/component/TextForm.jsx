import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpChange = () => {
    if (text !== "") {
      let newUppertext = text.toUpperCase();
      setText(newUppertext);
      props.showAlert("Converted to Uppercase", "success");
    } else {
      props.showAlert("There's Nothing To UpperCase Into TextBox", "warning");
    }
  };

  const handleLoChange = () => {
    if (text !== "") {
      let newLowertext = text.toLowerCase();
      setText(newLowertext);
      props.showAlert("Converted to Lowercase", "success");
    } else {
      props.showAlert("There's Nothing To LowerCase Into TextBox", "warning");
    }
  };

  const handleClear = () => {
    if (text !== "") {
      let cleartext = "";
      setText(cleartext);
      props.showAlert("Cleared the whole text", "danger");
    } else {
      props.showAlert("There's Nothing To Clear Into TextBox", "warning");
    }
  };

  const handleOnChangeAlert = () => {
    alert("Cannot edit in preview");
  };

  const handlecopyfunction = () => {
    if (text !== "") {
      var copyText = document.getElementById("text");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied the text : " + copyText.value, "success");
    } else {
      props.showAlert("There's Nothing To Copy Into TextBox", "warning");
    }
  };

  const handleExtraspaces = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces are cleared", "success");
    } else {
      props.showAlert("There's Nothing Remove Spaces Into TextBox", "warning");
    }
  };

  return (
    <div className={`main ${props.mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen py-8`}>
      <div className="container mx-auto px-6">
        <h1 className="text-center text-3xl font-bold mb-6">{props.heading}</h1>
        <div className="mb-6">
          <label htmlFor="text" className="block text-lg font-medium mb-2">
            Enter Your Text Here:
          </label>
          <textarea
            className={`w-full p-4 rounded-md border ${props.mode === "dark" ? "border-gray-600 bg-gray-800 text-white" : "border-gray-300 bg-gray-100 text-gray-900"}`}
            id="text"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0 mb-6">
          <button disabled={text.length === 0} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleUpChange}>Convert Uppercase</button>
          <button disabled={text.length === 0} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length === 0} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handlecopyfunction}>Copy To Clipboard</button>
          <button disabled={text.length === 0} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
          <button disabled={text.length === 0} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleLoChange}>Convert Lowercase</button>
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-semibold">{props.summaryHead}</h2>
          <p className="mt-2">Number of words: {text.split(" ").filter((element) => element.length !== 0).length}</p>
          <p>Number of characters: {text.length}</p>
          <p>Reading Time: {0.008 * text.split(' ').filter((element) => element.length !== 0).length} minutes</p>
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-center mb-4">Preview Document</h3>
          <textarea
            className={`w-full p-4 rounded-md border ${props.mode === "dark" ? "bg-gray-800 text-white border-collapse" : "bg-gray-100 text-gray-900"}`}
            id="text"
            rows="3"
            value={text}
            onChange={handleOnChangeAlert}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
