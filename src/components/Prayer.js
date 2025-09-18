export function Prayer() {
  return `
    <div class="bg-white rounded-xl p-4 shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">기도하기</h3>
            <p class="text-sm text-gray-600 mt-1">믿음으로 누리는 평강과 소망</p>
          </div>
        </div>
        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </div>
  `
} 