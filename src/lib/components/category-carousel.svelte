<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import { onMount } from "svelte";

  export let categories: Array<{ id: string; name: string }> = [];
  export let selectedCategory: string = "";
  export let buttonClass: string =
    "font-roboto text-sm md:text-[20px] hover:text-primary text-text-primary rounded-full px-6 py-2";
  export let selectedClass: string = "border-2 border-black";
  export let arrowClass: string = "w-5 h-5 text-gray-700";
  export let containerClass: string = "";

  let showLeftArrow = false;
  let showRightArrow = true;
  let categoriesContainer: HTMLDivElement;

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

<div class={`relative mb-10 ${containerClass}`}>
  {#if showLeftArrow}
    <button
      on:click={() => scrollCategories("left")}
      class="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
      aria-label="Scroll left"
    >
      <ChevronLeft class={arrowClass} />
    </button>
  {/if}

  <div
    bind:this={categoriesContainer}
    id="categories-container"
    class="flex overflow-x-auto scroll-smooth categories-scroll"
    on:scroll={checkScrollPosition}
  >
    {#each categories as category}
      <div class="flex-shrink-0">
        <button
          class={`${buttonClass} ${selectedCategory === category.id ? selectedClass : ""} cursor-pointer`}
          on:click={() => (selectedCategory = category.id)}
          aria-label={`Select ${category.name}`}
          aria-current={selectedCategory === category.id ? "page" : undefined}
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
      <ChevronRight class={arrowClass} />
    </button>
  {/if}
</div>
