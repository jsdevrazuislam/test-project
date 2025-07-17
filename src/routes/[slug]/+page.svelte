<script lang="ts">
  import { ChevronLeft, ChevronRight, ShareIcon } from "@lucide/svelte";
  import ImageGalleryModal from "$lib/components/image-gallery.svelte";
  import StarRating from "$lib/components/rating.svelte";
  import CouponModal from "$lib/components/coupon-modal.svelte";
  import CustomSelect from "$lib/components/ui/select.svelte";
  import { fade } from "svelte/transition";
  import toast from "svelte-french-toast";
  import { createZoomImageHover } from "@zoom-image/core";
  import { onMount, tick } from "svelte";

  let quantity = 1;
  let currentImageIndex = 0;
  let isModalOpen = false;
  let isModalCouponOpen = false;
  let showShareBox = false;
  let isCopied = false;
  const itemId = "25951118";
  const shareLink = `https://example.com/item/${itemId}`;
  let imageHoverContainer: HTMLDivElement;
  let zoomTarget: HTMLDivElement;
  let zoomInstance: ReturnType<typeof createZoomImageHover> | null = null;

  const openModal = () => (isModalOpen = true);
  const onClose = () => (isModalOpen = false);

  const openCouponModal = () => {
    isModalCouponOpen = true;
    document.body.style.overflow = "hidden";
  };

  const closeCouponModal = () => {
    isModalCouponOpen = false;
    document.body.style.overflow = "";
  };

  async function initZoom() {
    await tick();

    if (zoomInstance) {
      zoomInstance.cleanup();
      zoomInstance = null;
    }

    if (imageHoverContainer && images[currentImageIndex]) {
      zoomInstance = createZoomImageHover(imageHoverContainer, {
        zoomImageSource: images[currentImageIndex],
        customZoom: { width: 600, height: 500 },
        zoomTarget,
        scale: 2,
        zoomLensClass: "custom-lens",
      });
    }
  }

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

  const selectImage = (index: number) => {
    currentImageIndex = index;
    initZoom();
  };

  const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };

  const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      toast.success("copy successfully");
      setTimeout(() => (isCopied = false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  let hoverTimeout: number;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    showShareBox = true;
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      if (!isCopied) showShareBox = false;
    }, 300);
  };

  onMount(() => {
    initZoom();
    return () => {
      if (zoomInstance) {
        zoomInstance.cleanup();
      }
    };
  });

  $: if (images.length && currentImageIndex >= 0) {
    initZoom();
  }
</script>

<section class="py-16 font-open-sans">
  <div class="container">
    <nav class="text-sm text-text-grey font-normal mb-5">
      <ol class="flex items-center">
        <li>
          <a href="/" class="hover:underline">Home</a>
        </li>
        <li>
          <ChevronRight class="text-text-light-grey/30 w-[22px] h-[22px]" />
        </li>
        <li>
          <a href="/womens-clothing" class="hover:underline">Women's Clothing</a
          >
        </li>
        <li>
          <ChevronRight class="text-text-light-grey/30 w-[22px] h-[22px]" />
        </li>
        <li>Dress</li>
      </ol>
    </nav>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class=" hidden md:flex relative md:flex-col gap-2">
          {#each images.slice(0, 5) as image, index}
            <button on:click={() => selectImage(index)}>
              <img
                src={image}
                alt="thumb"
                class="thumbnail hover:ring-2 hover:ring-black"
              />
            </button>
          {/each}

          {#if images.length > 6}
            <button
              class="w-[65px] relative rounded-xl h-[65px] overflow-hidden text-[18px] cursor-pointer"
              on:click={openModal}
            >
              <img src={images[6]} alt="thumb" class="w-ful h-full" />

              <div
                class="bg-black/60 flex items-center justify-center text-white absolute top-0 left-0 w-full h-full"
              >
                {images.length - 6}+
              </div>
            </button>
          {/if}
        </div>
        <div
          bind:this={imageHoverContainer}
          class="w-full relative max-h-[600px] group"
        >
          <img
            src={images[currentImageIndex]}
            alt="Main"
            class="w-full h-full object-contain cursor-zoom-in rounded-md"
          />
          <div
            bind:this={zoomTarget}
            class="absolute hidden group-hover:block z-[100] top-0 left-full bg-white border border-gray-100 shadow-[0px_0px_10px_#0000001a]"
          ></div>
          <button
            class="w-[75px] h-[75px] absolute top-4 right-4"
            on:click={openModal}
          >
            <img
              src="/assets/expand.png"
              alt="Expand Icon"
              class="w-full h-full object-cover"
            />
          </button>
          <button
            class="absolute md:hidden left-2 top-1/2 border transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
            on:click={prevImage}
          >
            <ChevronLeft />
          </button>
          <button
            class="absolute md:hidden right-2 top-1/2 border transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
            on:click={nextImage}
          >
            <ChevronRight />
          </button>
          <button
            on:click={openModal}
            class="text-center hidden md:block text-lg w-full text-blue-600 mt-2 cursor-pointer"
          >
            Full View
          </button>
        </div>
      </div>

      <div>
        <h1 class="text-[22px] text-text-primary font-bold mb-6 lg:mb-10">
          Qianbihe Watch Pin Remover Adjustable Stainless Flexible with Slot
          Watch Band Tool for Home
        </h1>
        <div class="flex items-center justify-between border-b border-gray-200">
          <div
            class="text-text-grey flex items-center gap-3 text-[20px] mt-3 pb-5"
          >
            70 sold
            <StarRating
              gap={"gap-1"}
              rating={4.5}
              filledColor="text-primary fill-primary"
            />
            <p class="text-text-grey">(10 Reviews)</p>
          </div>
          <div
            class="relative inline-block"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            role="button"
            tabindex="0"
            aria-haspopup="dialog"
            aria-expanded={showShareBox}
            on:keydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showShareBox = !showShareBox;
              }
              if (e.key === "Escape" && showShareBox) {
                showShareBox = false;
              }
            }}
          >
            <button class="cursor-pointer relative" aria-label="Share">
              <ShareIcon class="w-5 h-5 text-gray-600" />
            </button>

            {#if showShareBox}
              <div
                transition:fade
                class="absolute top-full right-0 transform translate-x-[14%] mb-2 bg-white shadow-lg rounded-md p-4 w-72 z-10 border border-gray-200 text-[18px] text-text-grey"
              >
                <div class="flex items-center justify-between">
                  <div class="mb-2">Item ID: {itemId}</div>
                  <button
                    on:click={copyToClipboard}
                    class="ml-2 px-2 py-0.5 cursor-pointer rounded border border-gray-400 transition-colors"
                    aria-label="Copy link"
                  >
                    Copy
                  </button>
                </div>
                <div class="flex justify-center items-center mt-2">
                  <button
                    class="w-[210px] cursor-pointer py-2 rounded-full bg-primary transition-all duration-300 ease-in-out hover:bg-yellow-300 text-text-primary"
                    on:click={() => toast.success("copy successfully")}
                  >
                    Share Link
                  </button>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <div class="text-3xl font-bold text-black mt-5">
          $36.44 <span
            class="line-through font-semibold text-gray-400 text-2xl ml-2"
            >$66.23</span
          >
        </div>
        <div
          class="mt-2 scroll-smooth pb-1 h-[45px] flex items-center gap-3 text-orange-500 text-sm space-y-1 overflow-x-auto scrollbar-hide hover:scrollbar-default relative"
        >
          <button
            on:click={openCouponModal}
            class="bg-red-50 px-2 py-1 shrink-0 cursor-pointer"
          >
            $291.65 OFF For orders $2,916.48
          </button>
          <button
            on:click={openCouponModal}
            class="bg-red-50 px-2 py-1 shrink-0 cursor-pointer"
          >
            $233.32 OFF For orders $2,332.02
          </button>
          <button
            on:click={openCouponModal}
            class="bg-red-50 px-2 py-1 shrink-0 cursor-pointer"
          >
            $ 151.26 OFF For orders $ 1,511.43
          </button>
        </div>
        <CouponModal
          bind:isModalOpen={isModalCouponOpen}
          closeModal={closeCouponModal}
        />

        <div class="mt-3 text-[16px] text-text-primary">
          Color : <strong>As The Picture</strong>
        </div>

        <div class="mt-3">
          <button
            on:click={() => selectImage(1)}
            class="w-[78px] h-[78px] border-2 border-black cursor-pointer"
          >
            <img
              src="https://g-images-process.voghion.com/?bucket=voghion&resize=%7B%22width%22%3A800%7D&image=productImages%2Facdb9d9b0715491097ba68431831cbba_voghion1601x1601.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </button>
        </div>

        <div class="mt-3 flex items-center gap-2">
          <div class="text-[16px] text-text-primary">Quantity:</div>
          <CustomSelect
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "5" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
            ]}
            value={quantity}
            className="w-28"
          />
        </div>

        <div class="mt-6 space-y-3">
          <button
            class="w-full cursor-pointer bg-button text-lg transition-colors text-white py-4 font-semibold hover:bg-button/50"
            >Buy It Now</button
          >
          <button
            class="w-full cursor-pointer font-semibold text-lg border border-black text-text-primary hover:text-text-primary/50 py-3 bg-transparent transition-colors"
            >Add to cart</button
          >
          <button
            class="w-full flex justify-center font-semibold items-center gap-2 cursor-pointer text-lg border border-black text-text-primary hover:text-text-primary/50 py-2 bg-transparent transition-colors group"
          >
            <img
              src="/assets/customer.png"
              class="w-[40px] h-[40px] object-cover group-hover:opacity-50"
              alt=""
            />
            Customer Service</button
          >
        </div>
      </div>
    </div>

    
  </div>

  <ImageGalleryModal
    bind:isOpen={isModalOpen}
    {images}
    title="Qianbihe Watch Pin Remover Adjustable Stainless Flexible with Slot Watch Band Tool for Home"
    {onClose}
  />
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
    height: 2px;
  }

  .hover\:scrollbar-default:hover::-webkit-scrollbar {
    display: block;
  }

  .hover\:scrollbar-default::-webkit-scrollbar-track {
    background: white;
    border-radius: 4px;
  }

  .hover\:scrollbar-default::-webkit-scrollbar-thumb {
    background: #c8c9cb;
    border-radius: 4px;
  }

  .hover\:scrollbar-default::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
