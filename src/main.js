import './style.css'
import { renderLogin } from './login.js'
import { StatusBar } from './components/StatusBar.js'
import { Header } from './components/Header.js'
import { QTCard } from './components/QTCard.js'
import { Meditation } from './components/Meditation.js'
import { Prayer } from './components/Prayer.js'
import { BibleReading } from './components/BibleReading.js'
import { OurChurch } from './components/OurChurch.js'
import { Verse } from './components/Verse.js'
import { BottomNav } from './components/BottomNav.js'
import { renderStart } from './screens/StartScreen.js'
import { renderWord } from './screens/WordScreen.js'

function renderHome() {
  return `
  <div class="min-h-screen bg-gray-50">
    ${StatusBar()}

    <div class="max-w-md lg:max-w-4xl mx-auto bg-gray-50 min-h-screen">
      ${Header()}

      <div class="px-4 py-6 space-y-4 pb-24">
        ${QTCard()}
        ${Meditation()}
        ${Prayer()}
        ${BibleReading()}
        ${OurChurch()}
        ${Verse()}
      </div>
    </div>

    ${BottomNav()}
  </div>
  `
}

function render() {
  const hash = window.location.hash || '#home'
  if (hash === '#login') {
    document.querySelector('#app').innerHTML = renderLogin()
  } else if (hash === '#start') {
    document.querySelector('#app').innerHTML = renderStart()
  } else if (hash === '#word') {
    document.querySelector('#app').innerHTML = renderWord()
  } else {
    document.querySelector('#app').innerHTML = renderHome()
  }
}

window.addEventListener('hashchange', render)
render()
