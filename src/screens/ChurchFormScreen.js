import { TopCloseBar } from '../components/TopCloseBar.js'

export function renderChurchForm() {
  return `
  <div class="min-h-screen bg-neutral-100">
    ${TopCloseBar('#home')}

    <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-6">
      <h1 class="text-2xl font-extrabold text-gray-800 mb-6">교회 추가 문의</h1>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">교회 이름</label>
          <input type="text" class="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brown-700" placeholder="예) 온누리교회" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">주소</label>
          <input type="text" class="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brown-700" placeholder="예) 서울 용산구 ..." />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">설명</label>
          <textarea rows="5" class="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brown-700" placeholder="교회에 대한 간단한 설명을 적어주세요."></textarea>
        </div>
      </div>

      <div class="mt-6">
        <a href="#home" class="block w-full bg-brown-700 text-white rounded-2xl py-4 text-center font-semibold">문의 등록</a>
      </div>
    </div>
  </div>
  `
} 