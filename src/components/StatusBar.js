export function StatusBar() {
  return `
    <div class="fixed top-0 left-0 right-0 bg-brown-800 text-white z-50">
      <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div class="flex items-center space-x-2">
          <a href="#home" aria-label="메인으로 이동" class="font-semibold hover:underline">Momssi</a>
        </div>
        <div class="flex items-center space-x-1">
          <a href="#login" aria-label="로그인으로 이동" class="p-1 rounded hover:bg-brown-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `
} 