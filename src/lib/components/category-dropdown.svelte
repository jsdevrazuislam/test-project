<script lang="ts">
  import { ChevronDown, ChevronRight } from "@lucide/svelte";

  let isOpen = $state(false);
  let isMouseInDropdown = $state(false);
  let hoverTimeout = $state(0);
  let activeCategoryIndex = $state(0);

  const subCategories = [
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F533_1745550048169_voghion500x500.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F455_1727406178970_voghion500x490.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F327_1721199720939_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F435_1721199216055_voghion1200x1200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F82_1744170836559_voghion1600x1600.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F378_1740473420078_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F802_1711771843174_voghion200x200.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F977_1721213800524_voghion800x800.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F718_1720201761417_voghion1000x1000.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
    {
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F933_1720200118756_voghion510x530.png&format=webp&resize=%7B%22width%22%3A280%7D&fe=20250304",
      label: "Tops & Tees",
    },
  ];

  const categories = [
    { id: "clothing", title: "Clothing", items: subCategories },
    { id: "electronics", title: "Electronics", items: subCategories },
    { id: "mens-clothing", title: "Men's Clothing", items: subCategories },
    { id: "womens-clothing", title: "Women's Clothing", items: subCategories },
    { id: "home-kitchen", title: "Home & Kitchen", items: subCategories },
    {
      id: "beauty-personal-care",
      title: "Beauty & Personal Care",
      items: subCategories,
    },
    { id: "sports-outdoors", title: "Sports & Outdoors", items: subCategories },
    { id: "toys-games", title: "Toys & Games", items: subCategories },
    { id: "automotive", title: "Automotive", items: subCategories },
    { id: "books", title: "Books", items: subCategories },
    { id: "baby-products", title: "Baby Products", items: subCategories },
    {
      id: "grocery-gourmet",
      title: "Grocery & Gourmet Food",
      items: subCategories,
    },
    {
      id: "health-household",
      title: "Health & Household",
      items: subCategories,
    },
    {
      id: "industrial-scientific",
      title: "Industrial & Scientific",
      items: subCategories,
    },
    { id: "office-products", title: "Office Products", items: subCategories },
    { id: "pet-supplies", title: "Pet Supplies", items: subCategories },
    { id: "shoes", title: "Shoes", items: subCategories },
    { id: "jewelry", title: "Jewelry", items: subCategories },
    {
      id: "tools-home-improvement",
      title: "Tools & Home Improvement",
      items: subCategories,
    },
    { id: "video-games", title: "Video Games", items: subCategories },
  ];

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    isOpen = true;
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      if (!isMouseInDropdown) {
        isOpen = false;
      }
    }, 200);
  };

  const handleDropdownEnter = () => {
    clearTimeout(hoverTimeout);
    isMouseInDropdown = true;
  };

  const handleDropdownLeave = () => {
    isMouseInDropdown = false;
    isOpen = false;
  };

  const setActiveCategory = (index: number) => {
    activeCategoryIndex = index;
  };
</script>

<div class="relative w-full font-roboto">
  <button
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    class="flex items-center gap-2 leading-4.5 text-sm text-text-light-grey hover:text-primary transition-colors"
  >
    <span>Shop by <br /> category</span>
    <ChevronDown class="w-4 h-4" />
  </button>

  {#if isOpen}
    <div
      onmouseenter={handleDropdownEnter}
      onmouseleave={handleDropdownLeave}
      class="absolute cursor-pointer left-0 top-full mt-2 w-full max-w-[848px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden max-h-[calc(100vh-300px)] px-3 py-6"
      role="menu"
      tabindex={0}
      aria-orientation="vertical"
    >
      <div class="flex h-full divide-x divide-gray-200">
        <div class="overflow-y-auto max-h-[calc(100vh-300px)]">
          <ul role="menu">
            {#each categories as category, index}
              <li role="none">
                <button
                  onmouseenter={() => setActiveCategory(index)}
                  class={`w-full flex items-center gap-3 text-sm text-text-light-grey text-left px-3 py-1 rounded-md hover:bg-gray-50 cursor-pointer`}
                  role="menuitem"
                  aria-current={activeCategoryIndex === index}
                >
                  <span class="flex-1">{category.title}</span>
                  <ChevronRight class='w-4 h-4 text-text-light-grey' />
                </button>
              </li>
            {/each}
          </ul>
        </div>

        <div class="overflow-y-auto max-h-[calc(100vh-300px)] px-6 flex-1">
          <h3 class=" font-medium text-lg mb-4 text-text-primary">
            {categories[activeCategoryIndex].title}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
            {#each categories[activeCategoryIndex].items as category}
              <div
                class={`transition-transform duration-300 hover:scale-105`}
              >
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
    </div>
  {/if}
</div>
