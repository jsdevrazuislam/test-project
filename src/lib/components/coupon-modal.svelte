<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { X } from "@lucide/svelte";
  import { onMount } from "svelte";

  export let isModalOpen: boolean = false;
  export let closeModal: () => void = () => {};

  const coupons = [
    {
      id: 1,
      amount: 291.65,
      minOrder: 2916.48,
      type: "FOR ALL PRODUCTS",
      expiry: "2025-07-28 23:59:59",
    },
    {
      id: 2,
      amount: 233.32,
      minOrder: 2332.02,
      type: "FOR SELECTED ITEMS",
      expiry: "2025-08-15 23:59:59",
    },
    {
      id: 3,
      amount: 151.66,
      minOrder: 2000.0,
      type: "NEW CUSTOMERS",
      expiry: "2025-09-01 23:59:59",
    },
  ];

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

{#if isModalOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    transition:fade
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    on:click={closeModal}
  >
    <div
      transition:scale={{ start: 0.95 }}
      on:click|stopPropagation
      class="bg-white rounded-lg shadow-xl max-w-[400px] w-full p-4 max-h-[90vh] overflow-y-auto"
    >
      <div class="flex justify-between items-center mb-6">
        <div></div>
        <h3 class="text-[18px] text-text-primary text-center font-bold">
          Available coupons
        </h3>
        <button
          on:click={closeModal}
          class="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          aria-label="Close coupon modal"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      {#each coupons as coupon}
        <div class={`coupon mb-4 flex justify-between items-center`}>
          <div class="px-4 py-2 ml-[50px]">
            <div class="text-[24px] text-primary">$ {coupon.amount}</div>
            <div class="text-[12px] text-text-primary">
              Order of $ {coupon.minOrder} or More
            </div>
            <div class="text-[12px] text-primary">{coupon.type}</div>
            <div class="text-[12px] text-text-primary">
              Expired Time: {coupon.expiry}
            </div>
          </div>
          <button
            class="mr-4 text-[12px] px-4 rounded-full cursor-pointer py-1 bg-primary text-white"
          >
            Claim
          </button>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .coupon {
    border-image-source: url("/assets/coupon-bg.png");
    border-image-slice: 49.9% 49.9% 49.9% 40%;
    border-image-width: auto;
  }
</style>
