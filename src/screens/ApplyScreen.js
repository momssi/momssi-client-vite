import { TopCloseBar } from '../components/TopCloseBar.js'
import { StepControls } from '../components/StepControls.js'

export function renderApply() {
  return `
  <div class="min-h-screen bg-neutral-100">
    ${TopCloseBar('#home')}

    <div class="max-w-md mx-auto px-6 py-10 flex flex-col items-center justify-center" style="min-height: 70vh;">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 w-full p-6 font-serif">
        <h2 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">적용하기</h2>
        <p class="text-sm text-gray-700 leading-relaxed">오늘 받은 말씀을 삶에 어떻게 적용할지 간단히 기록해보세요.</p>
        <div class="mt-4">
          <textarea class="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brown-700" rows="15" placeholder="예) 말 조심하기, 감사 표현하기..."></textarea>
        </div>
      </div>
    </div>

    ${StepControls({ prevHref: '#find', nextHref: '#end', prevLabel: '이전', nextLabel: '다음' })}
  </div>
  `
}