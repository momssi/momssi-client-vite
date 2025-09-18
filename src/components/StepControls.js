export function StepControls({ prevHref = '#home', nextHref = '#home', prevLabel = '이전', nextLabel = '다음' } = {}) {
  return `
    <div class="fixed bottom-0 left-0 right-0 bg-transparent">
      <div class="max-w-md mx-auto px-4 pb-6">
        <div class="flex items-center justify-between">
          <a href="${prevHref}" class="bg-white text-gray-600 border border-gray-200 rounded-xl px-6 py-3 text-sm font-medium">${prevLabel}</a>
          <a href="${nextHref}" class="flex-1 ml-4 bg-brown-700 text-white rounded-xl py-3 px-4 text-center text-sm font-medium">${nextLabel}</a>
        </div>
      </div>
    </div>
  `
} 