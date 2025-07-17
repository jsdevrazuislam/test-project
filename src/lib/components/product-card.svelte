<script lang="ts">
  import StarRating from "$lib/components/rating.svelte";

  export let product: Product;


</script>

<a
  class="relative font-roboto overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
  href={`/${product.id}`}
>
  <div class="relative pt-[100%] overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.title}
      class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
      loading="lazy"
    />
    <div
      title="Limited time offer"
      class="absolute left-0 bottom-0 w-full h-1/9 z-2 flex items-center justify-end bg-no-repeat bg-cover bg-[url('/assets/deal-bg.png')]"
    >
      <span class="w-[48%] md:w-[55%] text-[14px] text-black truncate"
        >Limited time offer</span
      >
    </div>
  </div>

  <div class="p-4 flex-grow flex flex-col">
    <h3 class="text-text-primary text-[17px] line-clamp-1">{product.title}</h3>

    <div class="flex items-center">
      <span class="text-[24px] font-semibold text-secondary"
        >{product.price.toFixed(2)}€</span
      >
      {#if product.originalPrice > product.price}
        <span class="ml-2 text-[16px] text-gray-500/60 line-through"
          >{product.originalPrice.toFixed(2)}€</span
        >
      {/if}
    </div>
    <div class="text-[16px] text-text-grey mb-1">{product.sold} sold</div>
      <StarRating rating={product.rating} showNumber={true} />
  </div>
  <button class=" cursor-pointer absolute bottom-4 right-6">
    <img
      src="/assets/cart.png"
      alt="Cart icon"
      class="w-[38px] h-[38px] object-cover"
    />
  </button>
</a>
