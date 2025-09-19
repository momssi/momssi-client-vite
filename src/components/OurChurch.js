export function OurChurch() {
  return `
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <h3 class="text-xl font-bold text-gray-800 mb-3">우리 교회</h3>
      <div class="text-center">
        <p class="text-gray-600 mb-2">등록한 교회가 없어요 😥</p>
        <p class="text-sm text-gray-500 mb-4">다니는 교회의 멤버들을 만나보세요!</p>
        <a href="#church" class="bg-brown-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          등록하기
        </a>
      </div>
    </div>
  `
} 