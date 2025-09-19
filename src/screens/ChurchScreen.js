import { TopCloseBar } from '../components/TopCloseBar.js'

export function renderChurch() {
  return `
  <div class="min-h-screen bg-neutral-100">
    ${TopCloseBar('#home')}

    <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-6">
      <h1 class="text-2xl font-extrabold text-gray-800 mb-6">내가 다니는 교회를 등록해 보세요</h1>

      <!-- Search -->
      <div class="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center mb-6">
        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.386a1 1 0 01-1.414 1.415l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd"/></svg>
        <input class="ml-2 flex-1 outline-none text-sm placeholder-gray-400" placeholder="교회 이름으로 검색하기" />
      </div>

      <!-- List -->
      <div class="space-y-4">
        ${[1,2,3,4,5,6].map(()=>`
          <div class=\"bg-white rounded-xl border border-gray-100 p-4 flex items-start\">
            <div class=\"w-14 h-14 mr-4 rounded-md bg-gray-100 flex items-center justify-center\">
              <span class=\"text-2xl\">🏠</span>
            </div>
            <div>
              <div class=\"font-semibold text-gray-900\">온누리교회</div>
              <div class=\"text-sm text-gray-600 mt-1\">서울 용산구 이촌로 347-11 용산동 6가 (용산동6가)</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Inline action below list -->
      <div class="mt-6">
        <a href="#church-new" class="block w-full bg-brown-700 text-white rounded-2xl py-4 text-center font-semibold">교회 추가 문의하기</a>
      </div>
    </div>
  </div>
  `
} 