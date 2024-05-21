import React from 'react';

export default function About(props) {
  return (
    <div className={`py-8 ${props.mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`} id="main">
      <h1 className="text-center text-4xl font-extrabold mb-10">About App</h1>
      <div className="container mx-auto px-6">
        <div className="space-y-6" id="accordionExample">
          
          <div className={`border ${props.mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-lg shadow-md`}>
            <h2 className="accordion-header mb-0" id="headingOne">
              <button className={`accordion-button ${props.mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} w-full px-4 py-2 text-left font-bold rounded-t-lg focus:outline-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyse Your Text
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body px-4 py-3">
                <strong>Textutils gives you a way to analyze your text quickly and efficiently. It lets you count words, count characters, or estimate the reading time required. It has both light and dark modes for better compatibility.</strong>
              </div>
            </div>
          </div>

          <div className={`border ${props.mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-lg shadow-md`}>
            <h2 className="accordion-header mb-0" id="headingTwo">
              <button className={`accordion-button ${props.mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} w-full px-4 py-2 text-left font-bold rounded-t-lg focus:outline-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Free To Use
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body px-4 py-3">
                <strong>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limits.</strong>
              </div>
            </div>
          </div>

          <div className={`border ${props.mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-lg shadow-md`}>
            <h2 className="accordion-header mb-0" id="headingThree">
              <button className={`accordion-button ${props.mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} w-full px-4 py-2 text-left font-bold rounded-t-lg focus:outline-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Browser Compatible
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body px-4 py-3">
                <strong>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
