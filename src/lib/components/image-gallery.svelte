<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  export let images: string[] = [];
  export let title: string = "";
  export let isOpen: boolean = false;
  export let onClose: () => void = () => {};

  let selectedIndex = 0;
  $: selectedImage = images[selectedIndex];

  const selectImage = (index: number) => {
    selectedIndex = index;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
  };

  const handleOverlayKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClose();
    }
  };

  const handleOverlayClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeydown);
      return () => window.removeEventListener("keydown", handleKeydown);
    }
  });
</script>

{#if isOpen}
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    transition:fade={{ duration: 200 }}
    on:click={handleOverlayClick}
    on:keydown={handleOverlayKeydown}
    role="dialog"
    aria-modal="true"
    aria-label="Image gallery"
    tabindex="0"
  >
    <div
      class="bg-white relative max-w-6xl w-full p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto"
      in:fly={{ y: -50, duration: 300 }}
      out:fly={{ y: -50, duration: 200 }}
    >
      <button
        on:click={onClose}
        class="text-black z-10 cursor-pointer absolute right-4 top-4 text-xl hover:text-red-500"
        >✕</button
      >
      <div class="py-8 border-b border-gray-200 relative">
        <button
          class="border-t cursor-pointer text-sm font-[300] font-open-sans border-r border-l border-gray-200 text-primary px-4 py-2 rounded-md absolute bottom-0"
        >
          IMAGES
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-[54%_40%] gap-10 mt-4">
        <div class="bg-[#d8d8d8] px-8">
          <img
            src={selectedImage}
            alt="Selected"
            class="m-auto object-contain max-h-[500px] max-w-full lg:max-w-[500px]"
          />
        </div>

        <div class="py-4">
          <div class="flex justify-between items-start mb-2">
            <h2 class="text-[18px] lg:text-[22px] font-semibold font-open-sans">
              {title}
            </h2>
          </div>

          <div class="grid grid-cols-4 gap-2">
            {#each images as image, i}
              <button on:click={() => selectImage(i)}>
                <img
                  src={image}
                  alt="Thumb"
                  class="cursor-pointer rounded transition-all duration-200"
                  class:border-2={i === selectedIndex}
                  class:border-black={i === selectedIndex}
                />
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
