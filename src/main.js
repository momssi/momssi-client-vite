import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-50">
    <!-- Fixed Status Bar -->
    <div class="fixed top-0 left-0 right-0 bg-brown-800 text-white z-50">
      <div class="max-w-md lg:max-w-4xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div class="flex items-center space-x-2">
          <span>Momssi</span>
        </div>
        <div class="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Main Container with responsive max width -->
    <div class="max-w-md lg:max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <!-- Header with top margin for fixed status bar -->
      <div class="bg-gray-100 px-4 py-3 mt-12">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">오늘의 QT</h1>
          <span class="text-sm text-gray-500"></span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="px-4 py-6 space-y-4 pb-24">
        <!-- QT Card -->
        <div class="bg-green-800 rounded-xl p-6 text-white relative overflow-hidden">
          <div class="relative z-10 text-center">
            <div class="text-lg leading-relaxed mb-4">
              여호와여 그러하여도 나는 주께 의지하고 말하기를 주는<br>
              내 하나님이시라 하였나이다<br>
              나의 앞날이 주의 손에 있사오니 내 원수들과 나를<br>
              핍박하는 자들의 손에서 나를 건져 주소서
            </div>
            <div class="text-sm opacity-90">시편 31:14-15</div>
          </div>
          <div class="absolute bottom-4 right-4 flex space-x-2">
          </div>
        </div>

        <!-- Meditation Section -->
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
            <button class="flex-1 border border-brown-300 text-brown-700 py-2 px-4 rounded-lg text-sm font-medium">묵상 노트</button>
            <button class="flex-1 bg-brown-700 text-white py-2 px-4 rounded-lg text-sm font-medium">시작하기</button>
          </div>
        </div>

        <!-- Prayer Section -->
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
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Bible Reading Section -->
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <div class="flex items-start justify-between">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">성경통독</h3>
                <p class="text-sm text-gray-600 mt-1">시편 31편</p>
              </div>
            </div>
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-brown-800 text-white">
      <div class="max-w-md lg:max-w-4xl mx-auto">
        <div class="flex justify-around py-2">
          <div class="flex flex-col items-center py-2 px-3 bg-brown-700 rounded-lg">
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs">매일 QT</span>
          </div>
          <div class="flex flex-col items-center py-2 px-3">
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs">질문하기</span>
          </div>
          <div class="flex flex-col items-center py-2 px-3">
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-xs">성경</span>
          </div>
          <div class="flex flex-col items-center py-2 px-3">
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs">콘텐츠</span>
          </div>
          <div class="flex flex-col items-center py-2 px-3">
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            <span class="text-xs">교회</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`
