import React from 'react'
import './App.scss'
import Deadlyfingers from './svgs/deadlyfingers.svg'
import Code from './svgs/code.svg'
import GitHub from './svgs/github.svg'
import YouTube from './svgs/youtube.svg'
import Twitter from './svgs/twitter.svg'
import Instagram from './svgs/instagram.svg'

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <a title="Design" href="http://www.deadlyfingers.co.uk">
          <img src={Deadlyfingers} className="icon" alt="Design" />
        </a>

        <a title="Developer blog" href="http://www.deadlyfingers.net">
          <img src={Code} className="icon" alt="Code" />
        </a>

        <a title="GitHub" href="http://www.github.com/deadlyfingers">
          <img src={GitHub} className="icon" alt="GitHub" />
        </a>

        <a title="YouTube" href="http://youtube.com/deadlyfingerstv">
          <img src={YouTube} className="icon" alt="YouTube" />
        </a>

        <a title="Twitter" href="https://twitter.com/deadlyfingers">
          <img src={Twitter} className="icon" alt="Twitter" />
        </a>

        <a title="Instagram" href="https://instagram.com/deadlyfingers">
          <img src={Instagram} className="icon" alt="Instagram" />
        </a>
      </nav>
    </div>
  )
}

export default App
