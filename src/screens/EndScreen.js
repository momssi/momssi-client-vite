import { TopCloseBar } from '../components/TopCloseBar.js'
import { StepControls } from '../components/StepControls.js'

export function renderEnd() {
  return `
  <div class="min-h-screen bg-neutral-100">
    ${TopCloseBar('#home')}

    <div class="max-w-md mx-auto px-6 py-10 flex flex-col items-center justify-center" style="min-height: 70vh;">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 w-full p-8 text-center font-serif">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">말씀 묵상이 완료되었어요</h2>
        <p class="text-sm text-gray-700 leading-relaxed">이제 말씀을 깊이 새기며 <br />기도로 나아가 보세요.</p>
      </div>
    </div>

    ${StepControls({ prevHref: '#apply', nextHref: '#home', prevLabel: '이전', nextLabel: '완료' })}
  </div>
  `
} 