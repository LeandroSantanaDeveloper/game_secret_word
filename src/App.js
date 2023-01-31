import './App.css';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

import { useCallBack, useEffects, useState } from 'react';

import { wordList } from './data/words'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {
  const [words] = useState(wordList);
  const [gameStage, setGameStage] = useState(stages[0].name);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]    //Captura uma categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]             //Captura um elemento da catergoria 

    console.log(category);
    console.log(word);

    return { word, category }
  }

  const startGame = () => {
    const { word, category } = pickedWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(word, category);
    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name);
  }
  const veryfyLetter = () =>{
    setGameStage(stages[2].name);
  }
  const retry = () => {
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter= {veryfyLetter}/>}
      {gameStage === 'end' && <GameOver retry= {retry} />}
    </div>
  );
}

export default App;
