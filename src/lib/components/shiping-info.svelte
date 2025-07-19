<script lang="ts">
  import { ChevronRight, X } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";

  let isReportModalOpen: boolean = $state(false);

  const paymentMethods = [
    { image: "/assets/payments/paypal.webp", alt: "PayPal" },
    { image: "/assets/payments/visa.webp", alt: "Visa" },
    { image: "/assets/payments/master-card.webp", alt: "Mastercard" },
    { image: "/assets/payments/amex.webp", alt: "American Express" },
    { image: "/assets/payments/jcb.webp", alt: "JCB" },
    { image: "/assets/payments/union-pay.webp", alt: "Uni Pay" },
    { image: "/assets/payments/discover.webp", alt: "Discover" },
    { image: "/assets/payments/diner-club.webp", alt: "Diner Club" },
    { image: "/assets/payments/apple-pay.webp", alt: "Apple Pay" },
    { image: "/assets/payments/g-pay.webp", alt: "G Pay" },
    { image: "/assets/payments/pay-leter.webp", alt: "Paypal" },
  ];

  const shippingInfo = [
    {
      label: "Shipping",
      content: `Free Standard Shipping. <a href="/shipping" class="underline">See details</a>`,
    },
    {
      label: "Delivery",
      content: `Estimated between Tue, Jul 29 and Mon, Aug 4`,
    },
    {
      label: "Returns",
      content: ` You can return the product within 30 days of receipt. <a href="/returns" class="underline">See details</a>`,
    },
  ];

  const reportIssues = [
    "Copyright infringement",
    "Copyright infringement",
    "Copyright infringement",
  ];

  const product = {
    image:
      "https://g-images.voghion.com/productImages/4d9d474a11a6402e8dd490cb11b36174_voghion1601x1601.png",
    title:
      "Qianbihe Watch Pin Remover Adjustable Stainless Flexible with Slot Watch Band Tool for Home",
    price: 129.99,
  };

  const openModal = () => {
    isReportModalOpen = true;
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    isReportModalOpen = false;
    document.body.style.overflow = "";
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

<div class="h-fit lg:px-10">
  <button
    class="flex items-center text-[#3b7f34] mb-4 bg-[#f2f8f1] w-fit cursor-pointer"
    onclick={openModal}
  >
    <div
      class="w-6 h-6 bg-[#69b761] rounded-md flex justify-center items-center p-1"
    >
      <img src="/assets/report-icon.png" alt="" />
    </div>
    <p class="text-[10px] px-2 py-1">
      <span class="text-[12px] font-semibold">Report</span> - Include copyright
      infringement <ChevronRight class="w-3 h-3 inline" />
    </p>
  </button>

  <div class="space-y-4 pb-8 mt-8">
    {#each shippingInfo as item}
      <div class="text-sm text-text-primary/90 flex items-center">
        <h3 class="font-medium w-[100px]">{item.label}:</h3>
        <p class="text-sm text-gray-600 flex-1">
          {@html item.content}
        </p>
      </div>
    {/each}
    <div class="text-sm text-text-primary/90 flex">
      <h3 class="font-medium w-[100px]">Payments:</h3>
      <div class="flex flex-1 flex-wrap gap-y-2">
        {#each paymentMethods as method}
          <img
            src={method.image}
            alt={method.alt}
            class="h-6 w-12 object-contain"
            loading="lazy"
          />
        {/each}
      </div>
    </div>
  </div>

  <div class="pt-6 border-t border-gray-200">
    <h3 class="font-semibold text-sm text-text-primary mb-2">
      Shop with confidence
    </h3>
    <div class="flex items-center gap-3">
      <img
        class="w-[23px] h-[23px] object-contain"
        src="/assets/badge-verified.png"
        alt="Asset Icon"
      />
      <div>
        <p class="font-medium text-sm text-text-primary/90 mb-1">
          Money Back Guarantee
        </p>
        <p class="text-sm text-text-primary/80">
          Get the item you ordered or your money back. <a
            href="/guarantee"
            class="underline">Learn more</a
          >
        </p>
      </div>
    </div>
  </div>

  {#if isReportModalOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      transition:fade={{ duration: 150 }}
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 font-roboto"
      onclick={closeModal}
    >
      <div
        transition:scale={{ duration: 150 }}
        onclick={(e) => { e.stopPropagation()}}
        class="bg-white rounded-lg shadow-xl max-w-[500px] w-full max-h-[90vh] overflow-y-auto p-6"
      >
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-6">
          <div></div>
          <h3 class="text-lg font-semibold">Report</h3>
          <button
            onclick={closeModal}
            class="p-1 rounded-full cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close report modal"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="p-4 bg-[#f8f8f8]">
          <div class="flex items-center gap-4 bg-white">
            <div class="bg-white w-[62px] h-[62px]">
              <img
                src={product.image}
                alt={product.title}
                class="object-contain"
                loading="lazy"
              />
            </div>

            <div class="flex flex-1 flex-col justify-center p-2">
              <h4
                class="text-text-primary/80 font-[300] text-[16px] line-clamp-2"
              >
                {product.title}
              </h4>
              <p class="text-[16px] text-text-primary font-bold mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <p class="block text-[16px] font-medium text-text-primary mb-6">
            Please select the issue to report:
          </p>

          <ul class="space-y-2">
            {#each reportIssues as issue}
              <li
                class="flex justify-between items-center cursor-pointer border-b border-gray-100 pb-6"
              >
                <div class="flex text-sm flex-col overflow-hidden">
                  <div class="font-medium text-text-primary mb-2">
                    Infringement of intellectual property rights
                  </div>
                  <div class="text-text-grey/70">
                    Unauthorized use of intellectual property, brand images,
                    brand logos, and brand designs
                  </div>
                </div>
                <div class="w-30 h-full">
                  <ChevronRight class='text-text-grey w-4 h-4' />
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/if}
</div>
