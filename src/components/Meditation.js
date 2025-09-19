export function Meditation() {
  return `
    <div class="bg-white rounded-xl p-4 shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">묵상하기</h3>
            <p class="text-sm text-gray-600 mt-1">내 앞날, 주의 손에 있습니다</p>
            <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500">
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>3-7분</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                <span>58명</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <div class="flex space-x-2 mt-4">
        <button class="w-28 sm:w-32 border border-brown-300 text-brown-700 py-3 px-4 rounded-xl text-sm font-medium text-center">묵상 노트</button>
        <a href="#start" class="flex-1 ml-0 bg-brown-700 text-white py-3 px-4 rounded-xl text-sm font-medium text-center">시작하기</a>
      </div>
    </div>
  `
} 