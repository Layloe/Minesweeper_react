import './App.css'
import { useState, useEffect } from 'react'
import GameInfo from './components/GameInfo'
import Board from './components/Board'
// import utilities

const Game = () => {
    const [height] = useState(8)
    const [width] = useState(10)
    const [mines] = useState(10)
    const [gameData, setGameData] = useState([])
    const [gameStatus, setGameStatus] = useState("Game in Progress")
    const [mineCount, setMineCount] = useState(mines)
    const [key, setKey] = useState(false)
}
