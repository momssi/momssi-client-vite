import { TopCloseBar } from '../components/TopCloseBar.js'

export function renderStart() {
  return `
  <div class="min-h-screen bg-neutral-100">
    <!-- Top bar with close -->
    ${TopCloseBar('#home')}

    <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-6 flex flex-col items-center justify-center" style="min-height: 70vh;">
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
      <div class="max-w-md lg:max-w-4xl mx-auto px-0 pt-6 pb-6">
        <div class="flex items-center justify-between">
          <a href="#word" class="flex-1 ml-4 bg-brown-700 text-white rounded-xl py-3 px-4 text-center text-sm font-medium">시작</a>
        </div>
      </div>
    </div>
  </div>
  `
} 