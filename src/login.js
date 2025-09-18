import { Header } from './components/Header.js'
import { BottomNav } from './components/BottomNav.js'
import { StatusBar } from './components/StatusBar.js'

export function renderLogin() {
  return `
  <div class="min-h-screen bg-[#2b1e18] text-white relative">
    ${StatusBar()}

    <!-- Decorative top landscape -->
    <div class="w-full h-50 bg-gradient-to-b from-[#b88952] to-[#2b1e18] mt-12">
      <svg viewBox="0 0 375 100" preserveAspectRatio="none" class="w-full h-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop stop-color="#d5a76a" offset="0%" />
            <stop stop-color="#2b1e18" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="375" height="100" fill="url(#g)" />
      </svg>
    </div>

    <div class="max-w-md mx-auto px-6 pt-6">
      <h1 class="text-xl font-bold leading-snug mt-6 mb-6">살롬!<br>주님의 평화가 머무는<br>새빛에 오신 것을<br>환영합니다 :)</h1>

      <div class="space-y-4 mt-14">
        <a href="#home" class="block w-full bg-[#ffe812] text-black font-semibold py-4 rounded-xl text-center flex items-center justify-center space-x-2">
          <span class="inline-flex w-6 h-6 bg-black text-[#ffe812] rounded-full items-center justify-center">💬</span>
          <span>카카오로 계속하기</span>
        </a>
      </div>

      <div class="text-center mt-6">
        <a href="#" class="underline text-brown-300">문의하기</a>
      </div>

    </div>

    ${BottomNav()}
  </div>
  `
} 