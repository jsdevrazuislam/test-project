<script lang="ts">
  import ProductCard from "$lib/components/product-card-small.svelte";

  const similarProducts = [
    {
      id: 1,
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F2860704d2659479b9e0b24ab8ee3c7e4_voghion1001x1001.png&format=webp&resize=%7B%22width%22%3A294%7D&fe=20250304",
      title:
        "Qianbihe Adjustable Watch Strap Link Pin Remover DIY Band Adjuster Repairing Tool Kit-Silver",
      price: 29.99,
      sold: 10,
    },
    {
      id: 2,
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2Ff0255764c1ad42748885de36e509c27d_voghion1001x1001.png&format=webp&resize=%7B%22width%22%3A294%7D&fe=20250304",
      title:
        "Qianbihe Adjustable Watch Repair Tool Cover Remover Back Case Opener Screw Wrench Kit",
      price: 39.99,
      sold: 50,
    },
    {
      id: 3,
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F79fb6e4928bf47cbbff02df66ec1044e_voghion1001x1001.png&format=webp&resize=%7B%22width%22%3A294%7D&fe=20250304",
      title:
        "Qianbihe Adjustable Watch Back Case Cover Opener Remover Screw Wrench Repair Kit Tool",
      price: 19.99,
      sold: 100,
    },
    {
      id: 4,
      image:
        "https://g-images-process.voghion.com/?bucket=voghion&image=productImages%2F83_1733559207133_voghion557x557.png&format=webp&resize=%7B%22width%22%3A294%7D&fe=20250304",
      title:
        "2068c Watch Belt Remover With Box 3 Pin Bracelet Disassembly Metal Watch Remover Belt Adjuster Watch Repair Tool",
      price: 49.99,
      sold: 80,
    },
  ];
</script>

  <div>
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
    >
      <h2 class="text-[20px] text-text-primary font-semibold mb-2 sm:mb-0">
        Similar items
      </h2>
      <div class="flex items-center space-x-4">
        <a href="/feadback" class="text-text-primary text-lg underline"
          >Feedback on our suggestions</a
        >
        <span> | </span>
        <a
          href="/similar-products"
          class="text-text-primary text-lg flex items-center underline"
        >
          See all
        </a>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {#each similarProducts as product}
        <ProductCard containerClass='w-full' contentClass='!px-2 py-8' {product} />
      {/each}
    </div>
  </div>
