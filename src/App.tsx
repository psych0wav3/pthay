import React, { useEffect, useState } from 'react'
import './App.css'
import quatro from './assets/4.png'
import cinco from './assets/5.png'
import seis from './assets/6.png'
import sete from './assets/7.png'
import oito from './assets/8.png'
import nove from './assets/9.png'
import dez from './assets/10.png'
import onze from './assets/11.png'
import img from './assets/img.png'
import md5 from 'md5'
import convite from './assets/pdf/convite.pdf'

interface Teste {
  [key: string]: string | undefined
}

function App() {
  const validate = 'bf73a0bc3e50c69e1eb78effa794eb75'

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`09/17/${year}`) - +new Date()

    let timeLeft

    if (difference > 0) {
      timeLeft = [
        Math.floor(difference / (1000 * 60 * 60 * 24)),
        Math.floor((difference / (1000 * 60 * 60)) % 24),
        Math.floor((difference / 1000 / 60) % 60),
        Math.floor((difference / 1000) % 60)
      ]
    }

    return timeLeft as number[]
  }
  const [timeLeft, setTimeLeft] = useState<number[]>(calculateTimeLeft())
  const [error, setError] = useState<string>('')
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents: number[] = []

  timeLeft.forEach((interval) => {
    if (!timeLeft[interval]) {
    }

    timerComponents.push(interval)
  })

  const [dias, horas, minutos, segundos] = timerComponents

  const handleButton = () => {
    if (md5(value) === validate) {
      window.open(convite)
      return
    }
    setError('wrong')
    window.alert(
      'Poooooxa não foi dessa vez q vc conseguiu, mas não desista, continue tentando, Valeeeeu!'
    )
  }

  const handleImg = (text: string) => {
    window.alert(text)
  }

  return (
    <div className="App">
      <img className="img" onClick={() => handleImg('Ta friiiio!')} src={quatro} alt="" />
      <img className="img" onClick={() => handleImg('menos frio!')} src={cinco} alt="" />
      <img className="img" onClick={() => handleImg('pouco menos kkk')} src={seis} alt="" />
      <img className="img" onClick={() => handleImg('ixi ta frio de novo!')} src={sete} alt="" />
      <img className="img" onClick={() => handleImg('frozen é vc? kkkk')} src={oito} alt="" />
      <img
        className="img"
        onClick={() => handleImg('ta menos, mas ainda ta frio')}
        src={nove}
        alt=""
      />
      <img
        className="img"
        onClick={() => {
          window.alert('olhe dentro!')
          window.open(img)
        }}
        src={dez}
        alt=""
      />
      <img className="img" onClick={() => handleImg('Ta pegando fogo bicho!')} src={onze} alt="" />
      <div className="counter">
        <div className="countContainer">
          <div className="master">
            <div className="unit">
              <p>{dias}</p>
            </div>
            <span>Dias</span>
          </div>
          <div className="master">
            <div className="unit">
              <p>{horas}</p>
            </div>
            <span>Horas</span>
          </div>
          <div className="master">
            <div className="unit">
              <p>{minutos}</p>
            </div>
            <span>Minutos</span>
          </div>
          <div className="master">
            <div className="unit">
              <p>{segundos}</p>
            </div>
            <span>Segundos</span>
          </div>
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="password"
          className={error}
          placeholder="Digite a senha"
        />
        <button onClick={handleButton}>Tentar a sorte</button>
      </div>
    </div>
  )
}

export default App
