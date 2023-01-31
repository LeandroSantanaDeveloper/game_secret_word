
const StartScreen = ({startGame}) => {
  return (
    <div>
        <h1>Secret Word</h1>
        <p>Click no botão abaixo para jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen