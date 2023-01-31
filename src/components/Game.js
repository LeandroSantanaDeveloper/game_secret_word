import './Game.css';


import { useState, useRef } from 'react';
const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div className='game'>
      <p className='points'></p>
      <span>Puntuação: {score}</span>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit} >
          <input type="text" name="letter" 
          maxLength="1" 
          required 
          onChange={(e) => setLetter(e.target.value)} 
          value={letter}
          ref={letterInputRef} />
          <button>Jogar!</button>
        </form>

      </div>
      <div className="wrongLettersContainer"></div>
      <p>Letras já utilizadas:</p>
      {wrongLetters.map((letter, i) => (
        <span key={i}>{letter}, </span>
      ))}
    </div>
  )
}

export default Game