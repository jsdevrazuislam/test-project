<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import { onMount } from "svelte";

  let {
    categories = [],
    selectedCategory = "",
    buttonClass = "font-roboto text-sm md:text-[20px] hover:text-primary text-text-primary rounded-full px-6 py-2",
    selectedClass = "border-2 border-black",
    arrowClass = "w-5 h-5 text-gray-700",
    containerClass = ""
  } = $props();

  let showLeftArrow = $state(false);
  let showRightArrow = $state(true);
  let categoriesContainer = $state<HTMLDivElement>();

  const scrollCategories = (direction: "left" | "right") => {
    if (!categoriesContainer) return;

    const scrollAmount = 200;
    const newScrollLeft = direction === "right"
      ? categoriesContainer.scrollLeft + scrollAmount
      : categoriesContainer.scrollLeft - scrollAmount;

    categoriesContainer.scrollTo({
      left: newScrollLeft,
      behavior: "smooth"
    });

    setTimeout(checkScrollPosition, 300);
  };

  const checkScrollPosition = () => {
    if (!categoriesContainer) return;

    showLeftArrow = categoriesContainer.scrollLeft > 0;
    showRightArrow = categoriesContainer.scrollLeft < 
      categoriesContainer.scrollWidth - categoriesContainer.clientWidth;
  };

  onMount(() => {
    checkScrollPosition();
    const resizeHandler = () => checkScrollPosition();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });
</script>

<div class={`relative mb-10 ${containerClass}`}>
  {#if showLeftArrow}
    <button
      onclick={() => scrollCategories("left")}
      class="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
      aria-label="Scroll left"
    >
      <ChevronLeft class={arrowClass} />
    </button>
  {/if}

  <div
    bind:this={categoriesContainer}
    id="categories-container"
    class="flex overflow-x-auto scroll-smooth scrollbar-none"
    onscroll={checkScrollPosition}
  >
    {#each categories as category}
      <div class="flex-shrink-0">
        <button
          class={`${buttonClass} ${selectedCategory === category.id ? selectedClass : ""} cursor-pointer`}
          onclick={() => (selectedCategory = category.id)}
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
      onclick={() => scrollCategories("right")}
      class="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
      aria-label="Scroll right"
    >
      <ChevronRight class={arrowClass} />
    </button>
  {/if}
</div>
