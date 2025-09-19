import { TopCloseBar } from '../components/TopCloseBar.js'
import { StepControls } from '../components/StepControls.js'

export function renderEnd() {
  return `
  <div class="min-h-screen bg-neutral-100">
    ${TopCloseBar('#home')}

    <div class="max-w-md lg:max-w-4xl mx-auto px-6 py-10 flex flex-col items-center justify-center" style="min-height: 70vh;">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 w-full p-8 text-center font-serif">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">말씀 묵상이 준비되었어요</h2>
        <p class="text-sm text-gray-700 leading-relaxed">이제 말씀을 깊이 새기며 기도로 나아가 보세요.</p>
      </div>

      <!-- Local controls -->
      <div class="max-w-md lg:max-w-4xl mx-auto px-0 pt-6 pb-6">
        <div class="flex items-center justify-between">
          <a href="#apply" class="bg-white text-gray-600 border border-gray-200 rounded-xl px-6 py-3 text-sm font-medium">이전</a>
          <a href="#home" class="flex-1 ml-4 bg-brown-700 text-white rounded-xl py-3 px-4 text-center text-sm font-medium">완료</a>
        </div>
      </div>
    </div>
  </div>
  `
} 