<script lang="ts">
  import { ChevronRight, ChevronLeft } from "@lucide/svelte";
  import ProductCard from "$lib/components/product-card.svelte";
  import { onMount } from "svelte";

  const categories = [
    { name: "Recommended", id: "recommended" },
    { name: "Men’s Shorts", id: "men" },
    { name: "Jerseys", id: "jerseys" },
    { name: "Women's Bags", id: "woman" },
    { name: "Men's Bags", id: "beg" },
    { name: "Swimming, Diving & Water Sports", id: "sports" },
    { name: "E-Scooter & E-Bike", id: "ebike" },
    { name: "Makeup", id: "makeup" },
    { name: "Skin Care", id: "skin-care" },
    { name: "Wigs&Accs", id: "wing" },
    { name: "Phone Cases", id: "case" },
    { name: "Camping & Hiking", id: "camping" },
    { name: "Accessories", id: "accessories" },
    { name: "Sunscreen", id: "sunscreen" },
  ];

  const products = [
    {
      id: 1,
      title: "Burgundy Loose Wave 99J Colored Wig 13x4 Transparent Lace Front Glueless Human Hair Wig Pre plucked Ready To Wear",
      price: 24.99,
      originalPrice: 39.99,
      sold: 125,
      rating: 5,
      reviewCount: 36,
      image: "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2Ff881addee1498649c4d312bf0a908bda_voghion1000x1000.jpg&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304",
    },
    {
      id: 2,
      title: "Women's Clothing Wedding Dress New Sexy Deep V Neck Fishtail Lace Wedding Dress",
      price: 19.99,
      originalPrice: 29.99,
      sold: 89,
      rating: 4.5,
      reviewCount: 24,
      image: "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F3eb26afb906f10217170d67355b4d746_voghion800x800.png&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304",
    },
    {
      id: 3,
      title: "Women's Clothing Exquisite Solid Color Lace Up Ladies Dress",
      price: 19.99,
      originalPrice: 29.99,
      sold: 89,
      rating: 4.2,
      reviewCount: 24,
      image: "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F401_1741247198966_voghion1800x1800.png&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304",
    },
    {
      id: 4,
      title: "Women's Clothing Casual Cotton And Linen Solid Color Shirt Drawstring Wide Leg Pants Suit",
      price: 19.99,
      originalPrice: 29.99,
      sold: 89,
      rating: 4.2,
      reviewCount: 24,
      image: "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F217_1749707917043_voghion750x750.png&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304",
    },
    {
      id: 5,
      title: "Jerry Curly Short Pixie Bob Cut Human Hair Wigs With Bangs Glueless Wig Highlight Honey Water Wave Blonde Colored Wigs For Women",
      price: 19.99,
      originalPrice: 29.99,
      sold: 89,
      rating: 4.2,
      reviewCount: 24,
      image: "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F81bc76e46513ff825ab260daac72b4c4_voghion960x960.jpg&format=webp&resize=%7B%22width%22%3A500%7D&fe=20250304",
    },
  ];

  let selectedCategory = categories[0].id;
  let showLeftArrow = false;
  let showRightArrow = true;

  const scrollCategories = (direction: "left" | "right") => {
    const container = document.getElementById("categories-container");
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    setTimeout(() => {
      showLeftArrow = container.scrollLeft > 0;
      showRightArrow =
        container.scrollLeft < container.scrollWidth - container.clientWidth;
    }, 300);
  };

  const checkScrollPosition = () => {
    const container = document.getElementById("categories-container");
    if (!container) return;

    showLeftArrow = container.scrollLeft > 0;
    showRightArrow =
      container.scrollLeft < container.scrollWidth - container.clientWidth;
  };

  onMount(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  });
</script>

<section class="py-16">
  <div class="max-w-[1380px] mx-auto px-4">
    <div class="flex justify-center items-center text-center flex-col mb-6">
      <img
        src="/assets/summer-sale.png"
        alt="Summer Sale"
        class="w-[433px] h-[50px] object-cover object-top"
      />
      <h2
        class="text-xl md:text-[28px] tracking-[2px] font-arial-black font-bold text-[#333]"
      >
        EXPLORE YOUR INTERESTS
      </h2>
    </div>

    <div class="relative mb-10">
      {#if showLeftArrow}
        <button
          on:click={() => scrollCategories("left")}
          class="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft class="w-5 h-5 text-gray-700" />
        </button>
      {/if}

      <div
        id="categories-container"
        class="flex overflow-x-auto scroll-smooth categories-scroll"
        on:scroll={checkScrollPosition}
      >
        {#each categories as category}
          <div class="flex-shrink-0">
            <button
              class:selected={selectedCategory === category.id}
              class="font-roboto text-[20px] hover:text-primary text-text-primary rounded-full px-6 py-2 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap"
              on:click={() => (selectedCategory = category.id)}
            >
              {category.name}
            </button>
          </div>
        {/each}
      </div>

      {#if showRightArrow}
        <button
          on:click={() => scrollCategories("right")}
          class="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
          aria-label="Scroll right"
        >
          <ChevronRight class="w-5 h-5 text-gray-700" />
        </button>
      {/if}
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      {#each products as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
</section>
