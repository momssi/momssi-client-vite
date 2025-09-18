export function StepControls({ prevHref = '#home', nextHref = '#home', prevLabel = '이전', nextLabel = '다음' } = {}) {
  return `
    <div class="fixed bottom-0 left-0 right-0 bg-transparent">
      <div class="max-w-md mx-auto px-4 pb-6">
        <div class="flex items-center justify-between">
          <a href="${prevHref}" class="bg-white text-gray-500 border border-gray-200 rounded-full px-8 py-4">${prevLabel}</a>
          <a href="${nextHref}" class="flex-1 ml-4 bg-brown-700 text-white rounded-2xl py-4 text-center font-semibold">${nextLabel}</a>
        </div>
      </div>
    </div>
  `
} 