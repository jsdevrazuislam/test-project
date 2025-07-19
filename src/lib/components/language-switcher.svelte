<script lang="ts">
  import { fade } from "svelte/transition";
  import Radio from "$lib/components/ui/radio.svelte";

  let showSwitcher = $state(false);
  let selectedOption = $state("English");
  let hoverTimeout = $state<number>();
  let isMouseInSwitcher = $state(false);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    showSwitcher = true;
  };

  const handleMouseLeave = () => {
    if (!isMouseInSwitcher) {
      hoverTimeout = setTimeout(() => {
        showSwitcher = false;
      }, 300);
    }
  };

  const handleSwitcherEnter = () => {
    clearTimeout(hoverTimeout);
    isMouseInSwitcher = true;
  };

  const handleSwitcherLeave = () => {
    isMouseInSwitcher = false;
    hoverTimeout = setTimeout(() => {
      showSwitcher = false;
    }, 300);
  };
</script>


<div class="relative font-roboto">
  <button
    class="flex items-center gap-2 leading-4 text-text-primary font-semibold text-sm"
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    tabindex="0"
    aria-haspopup="dialog"
    aria-expanded={showSwitcher}
  >
    <img
      src="/assets/us-flag.webp"
      class="w-[30px] h-[30px] rounded-full object-cover"
      alt="Flag icon"
    />
    EN/ <br />
    USD
  </button>

  {#if showSwitcher}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      transition:fade
      onmouseenter={handleSwitcherEnter}
      onmouseleave={handleSwitcherLeave}
      class="absolute z-[50] top-full right-0 transform translate-x-[14%] mb-2 bg-white shadow-lg rounded-md p-4 w-[240px] border border-gray-200 text-[18px] text-text-grey"
    >
      <h3 class="text-text-primary font-semibold text-[16px] mb-4">Language</h3>
      <Radio
        name="options"
        value="English"
        selected={selectedOption}
        label="English"
      />
      <Radio
        name="options"
        value="Español"
        selected={selectedOption}
        label="Español"
      />
      <div class="w-full h-[1px] bg-gray-200 mt-4 mb-2"></div>
      <h3 class="text-text-primary font-semibold text-[16px] mb-2">Currency</h3>
      <Radio
        name="options"
        value="US Dollar ($ )"
        selected={selectedOption}
        label="US Dollar ($ )"
      />
      <Radio
        name="options"
        value="Euro (€)"
        selected={selectedOption}
        label="Euro (€)"
      />
      <Radio
        name="options"
        value="United Kingdom Pound (£)"
        selected={selectedOption}
        label="United Kingdom Pound (£)"
      />
      <div class="w-full h-[1px] bg-gray-200 mt-4 mb-4"></div>
      <h3 class="text-text-primary font-semibold text-[16px] mb-2">
        Country & Region
      </h3>
      <p class="text-sm text-text-grey">United States</p>
    </div>
  {/if}
</div>