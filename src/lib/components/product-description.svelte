<script lang="ts">
    const images = [
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F4d9d474a11a6402e8dd490cb11b36174_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Ff657bd5dc1fe4b29a19ba2e31b88214e_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fdbada6eb2b014282ba34b4bfea5be383_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F3578c395bc48858ac1cbe52b6210583a_voghion1601x1601.jpg",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fbbd505706196459cad999f4d25896165_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F656dc8d0a9be41caafff871d95089494_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fd8f9ffa4337c4797942b9ed37e10bb44_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F62a193b830f04ccd87829cdeea6b2ad7_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F2e21bcb14bc18f637559956fe598a561_voghion1601x1601.jpg",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2F13aad3428ad241a6ad727e99570c481b_voghion1601x1601.png",
    "https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Fa750fb08756b4aa7abf2a23023f5929b_voghion1601x1601.png",
  ];
</script>

<section class="mt-8">
  <h3
    class="inline-block bg-white text-text-primary text-[20px] font-semibold px-5 py-[18px] border border-[#e2e2e2] border-b-0 mb-[-1px]"
  >
    About this item
  </h3>
  <div class="border border-gray-200 px-5 py-4">
    <div
      class="flex flex-wrap justify-between items-center text-[20px] text-text-light-grey/80 mb-6"
    >
      <span>Seller assumes all responsibility for this listing.</span>
      <span class="text-text-grey/80"
        >Item number: <strong>25951118</strong></span
      >
    </div>
    <div class="text-lg font-[300] text-text-grey space-y-2">
      <h3 class="text-[22px] text-text-primary/80 font-semibold">
        Item description from the seller
      </h3>
      <p>Specifications:</p>
      <p>
        These tool are suit for open back case on most watches and repair watch.
      </p>
      <p>Type: Watch Repair Tool Kit</p>
      <p>Quantity: 16 Pcs/Set</p>
      <p>Features: Easy to Use, Useful, 16 Pcs Set</p>
      <p>Usage:</p>
      <p>
        Feet to Open the Table Key Use: Open the bottom cover and tighten the
        screws bud directly aligned with the tool in front of the bottom cover
        the gap of two feet turn right direction switch. You can easily open the
        watch case back.
      </p>
      <p>
        Open Base Knife Use: Press the bottom of the watch for the bottom cover
        must be one of the tools used, pry the end of knife.
      </p>
      <p>
        Split Strap Device Use: If your watch is new, then removed when the
        strap is the most convenient to use.
      </p>

      <div class='flex flex-col gap-4'>
        {#each images as item}
            <img src={item} alt="Product Image">
        {/each}
      </div>
    </div>
  </div>
</section>
