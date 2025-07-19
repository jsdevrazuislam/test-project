<section class="py-16">
  <div class="container">
    <div class="flex justify-center items-center text-center flex-col mb-6">
      <img
        src="https://static.voghion.com/static/pc/1.0.1/_nuxt/summer.efbe28c4.png"
        alt="Summer Sale"
        class="w-[433px] h-[50px] object-cover object-top"
      />
      <h2
        class="text-xl md:text-[28px] tracking-[2px] font-arial-black font-bold text-black"
      >
        EXPLORE YOUR INTERESTS
      </h2>
    </div>

    <div class="relative mb-8">
      <button
        class="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
        aria-label="Scroll left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m14 7l-5 5l5 5"
          />
        </svg>
      </button>

      <div
        id="categories-container"
        class="flex overflow-x-auto scroll-smooth categories-scroll space-x-4 px-10 py-4"
      >
        <div class="flex-shrink-0">
          <button
            class="text-[#303133] text-[20px] hover:text-[#fcc00f] rounded-full px-6 py-2 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap border border-black font-semibold"
          >
            Recommended
          </button>
          <button
            class="text-[#303133] text-[20px] hover:text-[#fcc00f] rounded-full px-6 py-2 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap"
          >
            Recommended
          </button>
        </div>
      </div>

      <button
        class="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m10 17l5-5l-5-5"
          />
        </svg>
      </button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
    <!-- Product Card -->
      <a
        class="relative font-headline overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        href={`/my-product`}
      >
        <div class="relative pt-[100%] overflow-hidden rounded-lg">
          <img
            src="https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2Ff881addee1498649c4d312bf0a908bda_voghion1000x1000.jpg&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304"
            alt="Product Title"
            class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
          <div
            title="Limited time offer"
            class="absolute left-0 bottom-0 w-full h-1/9 z-2 flex items-center justify-end bg-no-repeat bg-cover bg-[url('https://static.voghion.com/static/pc/1.0.1/_nuxt/lighting-deal.656afcfa.png')]"
          >
            <span class="w-[48%] md:w-[55%] text-[14px] text-black truncate"
              >Limited time offer</span
            >
          </div>
        </div>

        <div class="p-4 flex-grow flex flex-col">
          <h3 class="text-[#333] text-[17px] line-clamp-1">
            Burgundy Loose Wave 99J Colored Wig 13x4 Transparent Lace Front
            Glueless Human Hair Wig Pre plucked Ready To Wear
          </h3>

          <div class="flex items-center">
            <span class="text-[24px] font-semibold text-[#fa6338]"
              >{19.99}€</span
            >
            <span class="ml-2 text-[16px] text-[#999] line-through"
              >{27.99}€</span
            >
          </div>
          <div class="text-[16px] text-[#666] mb-1">100 sold</div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
          </div>
        </div>
        <button class=" cursor-pointer absolute bottom-4 right-6">
          <img
            src="data:image/png;base64,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"
            alt="Cart icon"
            class="w-[38px] h-[38px] object-cover"
          />
        </button>
      </a>
    <!-- Product Card -->
      <a
        class="relative font-headline overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        href={`/my-product`}
      >
        <div class="relative pt-[100%] overflow-hidden rounded-lg">
          <img
            src="https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2Fb49baf0b4792859a4e4a75da2be6f26d_voghion1040x1040.jpg&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304"
            alt="Product Title"
            class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
          <div
            title="Limited time offer"
            class="absolute left-0 bottom-0 w-full h-1/9 z-2 flex items-center justify-end bg-no-repeat bg-cover bg-[url('https://static.voghion.com/static/pc/1.0.1/_nuxt/lighting-deal-new-year.b3eca989.png')]"
          >
            <span class="w-[48%] md:w-[55%] text-[14px] text-black truncate">Limited time offer</span>
          </div>
        </div>

        <div class="p-4 flex-grow flex flex-col">
          <div class="flex gap-2">
            <div class="border rounded-[4px] font-[300] border-[#fa6338] text-sm text-[#fa6338] px-1 flex justify-center items-center w-fit">Quick Ship</div>
          <h3 class="text-[#333] text-[17px] line-clamp-1 flex-1">
            Burgundy Loose Wave 99J Colored Wig 13x4 Transparent Lace Front
            Glueless Human Hair Wig Pre plucked Ready To Wear
          </h3>
          </div>

          <div class="flex items-center">
            <span class="text-[24px] font-semibold text-[#fa6338]"
              >{19.99}€</span
            >
            <span class="ml-2 text-[16px] text-[#999] line-through"
              >{27.99}€</span
            >
          </div>
          <div class="text-[16px] text-[#666] mb-1">100 sold</div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
              />
            </svg>
          </div>
        </div>
        <button class=" cursor-pointer absolute bottom-4 right-6">
          <img
            src="data:image/png;base64,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"
            alt="Cart icon"
            class="w-[38px] h-[38px] object-cover"
          />
        </button>
      </a>
    </div>
  </div>
</section>
