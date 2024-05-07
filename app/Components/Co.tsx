"use client";
import React  from 'react';
import { useState,useEffect} from 'react';
import {
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";
const samplememes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "What do you call fake spaghetti? An impasta!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? Because it was two-tired!"
];

interface MyComponentProps {
  optionalProp?: string;
}


const DevMemeGenerator :React.FC<MyComponentProps> =({ optionalProp }) => {
  const [memes,setmemes]=useState(samplememes);
  const [randomMeme, setRandomMeme] = useState<string | null>(null);
  useCopilotReadable({
  description:
    "Create jokes on any topic ",
  value: [
    {
      name: "meme",
      type: "string",
      description: "Meme to be generated",
      required: true,
    }
  ]});

useCopilotAction(
  {
    name: "generatememesAndImplementationTutorial",
    description:
      "Create jokes on any topic ",
    parameters: [
      {
        name: "meme",
        type: "string",
        description: "Meme to be generated",
        required: true,
      }
    ],
    handler: async ({ meme }) => {
      setmemes((prev) => [...prev, meme]);
     
    },
  },
  [memes]
);
 useEffect(()=>{
generateRandomMeme();
 })

  const generateRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div>
      <div className='block text-rose-400 text-4xl font-bold my-10 text-center'>Jokes Generator</div>
    <div>
      {randomMeme && (
        <div className="italic">
          
          <p>😆  <span >   {randomMeme}</span></p>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default DevMemeGenerator;