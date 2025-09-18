import { TopCloseBar } from '../components/TopCloseBar.js'

export function renderStart() {
  return `
  <div class="min-h-screen bg-neutral-100">
    <!-- Top bar with close -->
    ${TopCloseBar('#home')}

    <div class="max-w-md mx-auto px-4 py-6 flex flex-col items-center justify-center" style="min-height: 70vh;">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full">
        <div class="divide-y divide-gray-200 font-serif">
          <div class="p-5">
            <h2 class="text-base sm:text-lg font-semibold text-gray-900 text-left">
              <span class="bg-gray-100 rounded px-1">혀의 힘</span>
            </h2>
          </div>
          <div class="p-5 text-gray-800">
            <p class="text-sm text-left">2025.09.18(목)</p>
          </div>
          <div class="p-5 text-gray-800">
            <p class="text-sm text-left">
              초원에서, 묵상 <span class="bg-gray-100 rounded px-1">1일 째</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Start button -->
      <div class="mt-8 flex justify-center w-full">
        <a href="#word" class="w-11/12 sm:w-2/3 bg-brown-700 text-white text-sm font-medium py-3 px-4 rounded-xl text-center">시작하기</a>
      </div>
    </div>
  </div>
  `
} 