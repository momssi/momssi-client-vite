export function TopCloseBar(link = '#home') {
  return `
    <div class="pt-4 px-4 flex items-center">
      <a href="${link}" aria-label="닫기" class="text-gray-500 text-1xl">✕</a>
      <div class="ml-auto flex items-center space-x-2 text-gray-500"></div>
    </div>
  `
} 