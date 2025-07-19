<script lang="ts">
 import { ChevronLeft, ChevronRight } from '@lucide/svelte';
  import SectionTitle from "$lib/components/section-title.svelte";
  const categoriesTop = [
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Electronics",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Men's Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Women's Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Home & Kitchen",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Beauty & Personal Care",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Sports & Outdoors",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Toys & Games",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Automotive",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Books",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Baby Products",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Grocery & Gourmet Food",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Health & Household",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Industrial & Scientific",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Office Products",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Pet Supplies",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Shoes",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Jewelry",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tools & Home Improvement",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
  ];
  const categoriesBottom = [
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Electronics",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Men's Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Women's Clothing",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Home & Kitchen",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Beauty & Personal Care",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Sports & Outdoors",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Toys & Games",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Automotive",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Books",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Baby Products",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Grocery & Gourmet Food",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Health & Household",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Industrial & Scientific",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Office Products",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Pet Supplies",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Shoes",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Jewelry",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tools & Home Improvement",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
  ];
</script>

<section class="py-16 relative">
  <div class="container">
    <SectionTitle title="CATEGORIES" titleClass="!font-normal font-roboto" />
    <div class="mt-8">
      <!-- Top Slider -->
      <div class="flex gap-10 w-full overflow-x-auto scrollbar-none">
        {#each categoriesTop as category}
        <div class={`transition-transform duration-300 hover:scale-105 w-[140px] shrink-0`}>
          <div
            class="border border-gray-200 rounded-full overflow-hidden aspect-square"
          >
            <img
              src={category.image}
              alt={category.label}
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2 text-sm text-text-light-grey text-center">
            {category.label}
          </p>
        </div>
        {/each}
      </div>
      <!-- Bottom Slider -->
       <div class="flex gap-10 w-full overflow-x-auto scrollbar-none mt-8">
        {#each categoriesBottom.reverse() as category}
        <div class={`transition-transform duration-300 hover:scale-105 w-[140px] shrink-0`}>
          <div
            class="border border-gray-200 rounded-full overflow-hidden aspect-square"
          >
            <img
              src={category.image}
              alt={category.label}
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2 text-sm text-text-light-grey text-center">
            {category.label}
          </p>
        </div>
        {/each}
      </div>
    </div>
  </div>

  <button
    class="absolute left-2 md:left-10 top-[55%] -translate-y-1/2 z-10 bg-white/80 text-text-primary rounded-full p-2 shadow-md cursor-pointer"
    aria-label="Previous categories"
  >
    <ChevronLeft class="w-5 h-5" />
  </button>
  
  <button
    class="absolute right-2 md:right-10 top-[55%] -translate-y-1/2 z-10 bg-white/80 text-text-primary rounded-full p-2 shadow-md cursor-pointer"
    aria-label="Next categories"
  >
    <ChevronRight class="w-5 h-5" />
  </button>
</section>
