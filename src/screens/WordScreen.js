import { TopCloseBar } from '../components/TopCloseBar.js'
import { StepControls } from '../components/StepControls.js'

export function renderWord() {
  return `
  <div class="min-h-screen bg-neutral-100">
    <!-- Top bar -->
    ${TopCloseBar('#home')}

    <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-6 flex flex-col items-center justify-center" style="min-height: 70vh;">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full">
        <div class="divide-y divide-gray-200 font-serif">
          <div class="p-5">
            <h2 class="text-base sm:text-lg font-semibold text-gray-900 text-left">오늘의 말씀</h2>
          </div>
          <div class="p-5 text-gray-800">
            <p class="text-sm text-left">잠언 18:19-23 개역개정</p>
          </div>
          <ul class="divide-y divide-gray-200">
            <li class="px-5 py-3 text-sm leading-relaxed text-gray-800">19 노엽게 한 형제와 화목하기가 견고한 성을 취하기보다 어려운즉 이러한 다툼은 산성 문빗장 같으니라</li>
            <li class="px-5 py-3 text-sm leading-relaxed text-gray-800">20 사람은 입에서 나오는 열매로 말미암아 배부르게 되나니 곧 그의 입술에서 나는 것으로 말미암아 만족하게 되느니라</li>
            <li class="px-5 py-3 text-sm leading-relaxed text-gray-800">21 죽고 사는 것이 혀의 힘에 달렸나니 혀를 쓰기 좋아하는 자는 혀의 열매를 먹으리라</li>
            <li class="px-5 py-3 text-sm leading-relaxed text-gray-800">22 아내를 얻는 자는 복을 얻고 여호와께 은총을 받는 자니라</li>
            <li class="px-5 py-3 text-sm leading-relaxed text-gray-800">23 가난한 자는 간절한 말로 구하여도 부자는 엄한 말로 대답하느니라</li>
          </ul>
        </div>
      </div>

      <!-- Local step controls below content (non-fixed) -->
      <div class="max-w-md lg:max-w-4xl mx-auto px-0 pt-6 pb-6">
        <div class="flex items-center justify-between">
          <a href="#start" class="bg-white text-gray-600 border border-gray-200 rounded-xl px-6 py-3 text-sm font-medium">이전</a>
          <a href="#find" class="flex-1 ml-4 bg-brown-700 text-white rounded-xl py-3 px-4 text-center text-sm font-medium">다음</a>
        </div>
      </div>
    </div>
  </div>
  `
}