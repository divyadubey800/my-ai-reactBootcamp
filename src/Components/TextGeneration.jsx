// import React, { useState } from 'react'
// import { GoogleGenerativeAI } from "@google/generative-ai";
// //initialistion of gemini AI
// const genAI =new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// //function for text generation
// async function GenerateText(promptProvided) {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
//     const prompt = promptProvided;
  
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
//   }
  
//   GenerateText();
  
//   const TextGeneration=()=>{
//       const[prompt,setPrompt]=useState("");
//       function handleChange(e){
//         setPrompt(e.target.value);
//       }
//       //function to handle submission
//       function handleSubmit(){
//         GenerateText(prompt);
//       }
  

//  return (

//     <div className="max-w-screen-xl mx-auto">   
//         <h1 className="text-center
//          text-4xl text-blue-900"> MY AI: Text-Generation</h1>

//          <div className="my-10 mx-auto max-w-screen-lg">
//             <label className=" block my-4" htmlFor="Enter your prompt "> Enter your prompt </label>
//             <textarea 
//                 type="text"
//                 onChange={handleChange}
//                 rows={5} cols={120} type="text" onChange={setPrompt} className="border rounded border-black "></textarea>
//             <button className="block border rounded-lg border-black bg-red-900 text-white px-2 my-1" >Generate</button>
//          </div>

//     </div>
//   )
// }

// export default TextGeneration


import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
//initialization of Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

//function for text-generation
async function GenerateText(promptProvided) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = promptProvided;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}
// GenerateText();
const TextGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const[response,setResponse]=useState("")
  function handleChange(e) {
    setPrompt(e.target.value);
  }
  //function to handle submission
   async function handleSubmit(){
    const GenerateResponse= await GenerateText(prompt);
    setResponse(GenerateResponse);
    console.log(GenerateResponse);
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl text-blue-900">
        MY AI : Text-Generation
      </h1>

      <div className="my-10 mx-auto max-w-screen-lg">
        <label className="block my-4" htmlFor="Enter your prompt">
          Enter your prompt
        </label>
        <textarea
          type="text"
          onChange={handleChange}
          className="border w-full  rounded border-black" rows={5} cols={120}
        />
        <button onClick={handleSubmit} className="block border rounded-r-lg border-black bg-blue-900 text-white px-2 my-1">
          Generate{" "}
        </button>
      </div>
      <div className="my-4 max-w-screen-xl">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default TextGeneration;