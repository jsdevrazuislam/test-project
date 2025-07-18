<script lang="ts">
  import Rating from "$lib/components/rating.svelte";
  import Pagination from "$lib/components/ui/pagination.svelte";
</script>

<section class="mt-8">
  <div class="flex gap-5 items-center">
    <h3 class="text-[20px] font-semibold text-text-primary">
      Reviews <span class="text-text-grey/80 font-[400]">(15)</span>
    </h3>
    <Rating rating={4.8} gap={"gap-2"} showNumber={true} />
  </div>
  <div class="mt-6 bg-[#f9f9f9] px-6 py-10 text-[#999] text-sm">
    <div
      class="flex justify-between items-center border-b border-gray-200 pb-6"
    >
      <div class="flex flex-col gap-2">
        <Rating rating={5} gap={"gap-2"} showNumber={true} />
        <p>2025-05-05 14:49:49</p>
        <p class="text-text-grey">
          produit. reçu. fragile. à. manipulater. les. pointes. sont. hyper.
          fragile.
        </p>
      </div>
      <span>Verified purchase</span>
    </div>
    <Pagination onPageChange={(page) => console.log(page)} currentPage={1} totalPages={5} totalProducts={100} />
  </div>
</section>
