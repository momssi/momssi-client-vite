import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div class="flex justify-center space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank" class="hover:scale-110 transition-transform">
          <img src="${viteLogo}" class="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="hover:scale-110 transition-transform">
          <img src="${javascriptLogo}" class="h-16 w-16" alt="JavaScript logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Hello Vite!</h1>
      <div class="text-center">
        <button id="counter" type="button" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"></button>
      </div>
      <p class="text-gray-600 text-center mt-4">
        Click on the Vite logo to learn more
      </p>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
