<script lang="ts">
  type Color = "violet" | "Black" | "greens";
  type Size = "S" | "M" | "L" | "XL" | "XXL";

  let selectedColor: Color = "violet";
  let selectedSize: Size = "S";
  let quantity = 1;
  let currentImageIndex = 0;

  const colors: Color[] = ["violet", "Black", "greens"];
  const sizes: Size[] = ["S", "M", "L", "XL", "XXL"];
  const images = [
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fd0eb1756cebdb04301af62b1d4194451_voghion1200x1200.jpg",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F0e1a3ea6b60be52f0b09e42c38863e2d_voghion1200x1200.jpg",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F2babf19728331f9639b104c4d87e5472_voghion1200x1200.jpg",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fde142310ac5aa0d434f85a3f3eb22610_voghion1200x1200.jpg",
  ];

  const selectImage = (index: number) => {
    currentImageIndex = index;
  };
</script>

<div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex md:flex-col gap-2">
      {#each images as image, index}
        <img
          src={image}
          alt="thumb"
          class='thumbnail'
          class:thumbnail-active={index === currentImageIndex}
          on:click={() => selectImage(index)}
        />
      {/each}
    </div>
    <div class="w-full">
      <img
        src={images[currentImageIndex]}
        alt="Main"
        class="w-full h-auto object-cover rounded-md"
      />
      <div class="text-center text-blue-600 mt-2 cursor-pointer">Full View</div>
    </div>
  </div>

  <div>
    <h1 class="text-xl font-bold">
      Middle East cross border women's clothing Arab robe fashion sequin
      embroidery chiffon two piece dress Europe and America
    </h1>
    <div
      class="text-gray-500 text-xl font-normal mt-3 border-b border-gray-100 pb-5"
    >
      70 sold
      <span class="text-yellow-400 ml-2">★ ★ ★ ★ ★</span>
      <a href="#" class="text-gray-500 ml-1">(10 Reviews)</a>
    </div>

    <div class="text-3xl font-bold text-black mt-4">
      $36.44 <span
        class="line-through font-semibold text-gray-400 text-2xl ml-2"
        >$66.23</span
      >
    </div>
    <div
      class="mt-2 flex items-center gap-3 text-orange-500 text-sm space-y-1 overflow-x-auto"
    >
      <div class="bg-red-50 px-2 py-1 shrink-0">
        $291.65 OFF For orders $2,916.48
      </div>
      <div class="bg-red-50 px-2 py-1 shrink-0">
        $233.32 OFF For orders $2,332.02
      </div>
      <div class="bg-red-50 px-2 py-1 shrink-0">$151.66 OFF For orders ...</div>
    </div>

    <div class="mt-6">
      <label class="block text-gray-500 mb-3" for="color"
        >colours: <span class="font-semibold text-gray-800"
          >{selectedColor}</span
        ></label
      >
      <div class="flex gap-2 flex-wrap">
        {#each colors as color}
          <button
            class="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm capitalize transition"
            class:btn-selected={selectedColor === color}
            on:click={() => (selectedColor = color)}
          >
            {color}
          </button>
        {/each}
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-gray-500 mb-3" for="size"
        >size: <span class="font-semibold text-gray-800">{selectedSize}</span
        ></label
      >
      <div class="flex gap-2 flex-wrap">
        {#each sizes as size}
          <button
            class="px-6 py-1 border border-gray-300 cursor-pointer rounded-full text-sm"
            class:btn-selected={selectedSize === size}
            on:click={() => (selectedSize = size)}
          >
            {size}
          </button>
        {/each}
      </div>
    </div>

    <div class="mt-6 flex items-center gap-2">
      <label class="block text-gray-500 mb-1" for="quality">Quantity:</label>
      <input
        type="number"
        min="1"
        bind:value={quantity}
        class="w-24 border border-gray-200 rounded px-2 py-1 text-gray-500 font-normal"
        id="quality"
      />
    </div>

    <button class="text-blue-400 font-normal text-sm cursor-pointer mt-4">
        Size Guide
    </button>

    <div class="mt-6 space-y-3">
      <button
        class="w-full cursor-pointer bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
        >Buy It Now</button
      >
      <button
        class="w-full cursor-pointer border border-gray-300 text-gray-800 py-3 rounded hover:bg-gray-50 transition"
        >Add to cart</button
      >
    </div>
  </div>
</div>
