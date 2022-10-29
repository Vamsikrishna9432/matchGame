import './index.css'

const Navbar = props => {
  const {timeOfGame, score} = props

  return (
    <ul className="nav-container">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <li className="score-container">
        <p className="score">
          Score: <span className="score-mum">{score}</span>
        </p>
        <li className="timer-container">
          <img
            className="time-image"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="time">{timeOfGame} sec</p>
        </li>
      </li>
    </ul>
  )
}
export default Navbar
