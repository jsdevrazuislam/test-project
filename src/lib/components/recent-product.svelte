<script lang="ts">
  import CategoryCarousel from "$lib/components/category-carousel.svelte";
  import ProductCard from "$lib/components/product-card-small.svelte";

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

  let selectedCategory: string = $state(categories[0].id);
</script>

<section class="mt-8">
  <h3 class="text-2xl font-semibold text-text-primary mb-6">
    Based on your recently viewed
  </h3>
  <CategoryCarousel
    {categories}
    {selectedCategory}
    selectedClass="border-2 border-black"
  />
  <div class="flex overflow-x-auto scroll-smooth gap-2 mt-6 pb-6">
    {#each similarProducts as product}
      <ProductCard
        {product}
        titleClass="!text-lg leading-6"
        priceClass="!text-2xl"
        discountClass="!text-lg"
        soldClass="!text-[20px]"
        containerClass='w-[70%] md:w-[38%] lg:w-[18.1818%]'
      />
    {/each}
  </div>
</section>
