<script lang="ts">
  import clsx from "clsx";
  let {
    product,
    titleClass = '',
    priceClass = '',
    soldClass = '',
    discountClass = '',
    contentClass = '',
    containerClass = ''
  } = $props();
</script>

<a
  class={clsx(`relative font-open-sans overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex-shrink-0`, containerClass)}
  href={`/${product.id}`}
>
  <div class="relative overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.title}
      class="w-full h-full object-cover transition-opacity duration-300"
      loading="lazy"
    />
  </div>

  <div class={clsx(`p-4 flex-grow flex flex-col`, contentClass)}>
    <h3 class={clsx('text-text-primary text-sm line-clamp-3 mb-2', titleClass)}>{product.title}</h3>
    <div class={clsx('text-lg font-semibold text-black', priceClass)}>{product.price.toFixed(2)}€</div>
    <div class={clsx('flex items-center gap-3 text-sm', discountClass)}>
        <div class=" text-text-grey/80 line-through">$ 8.95</div>
        <div class="font-medium text-text-grey/80">16% off</div>
    </div>
    <div class={clsx('text-sm text-text-grey mb-1', soldClass)}>{product.sold} sold</div>
  </div>
  <button class=" cursor-pointer absolute bottom-4 right-6">
    <img
      src="/assets/cart-icon-white.png"
      alt="Cart icon"
      class="w-[50px] h-[32px] object-contain"
    />
  </button>
</a>
