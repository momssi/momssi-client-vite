export function renderStart() {
  return `
  <div class="min-h-screen bg-neutral-100">
    <!-- Top bar with close -->
    <div class="pt-4 px-4 flex items-center">
      <a href="#home" aria-label="닫기" class="text-gray-500 text-1xl">✕</a>
      <div class="ml-auto flex items-center space-x-2 text-gray-500">
      </div>
    </div>

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
          <div class="p-5 text-gray-800">
            <p class="text-sm text-left">
            </p>
          </div>
        </div>
      </div>

      <!-- Start button -->
      <div class="mt-8 flex justify-center w-full">
        <a href="#home" class="w-full sm:w-3/4 bg-brown-700 text-white text-base font-semibold py-4 rounded-2xl text-center">시작하기</a>
      </div>
    </div>
  </div>
  `
} 