<script lang="ts">
   let {
    label = "",
    bindChecked = false,
    required = false,
    linkText = "",
    linkHref = ""
  } = $props();
</script>

<label class="flex items-start cursor-pointer group font-roboto text-[12px] mb-2">
  <div class="relative flex items-center">
    <input
      type="checkbox"
      bind:checked={bindChecked}
      class="appearance-none focus:shadow-[0_0_0_2px_rgba(0,0,0,0.1)]
    hover:not-checked:border-[#9ca3af] w-4 h-4 border-1 border-gray-200 hover:border-none rounded-full checked:bg-black transition-colors duration-200"
      {required}
    />
    {#if bindChecked}
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          class="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    {/if}
  </div>

  <div class="ml-2 text-text-light-grey/80">
   {#if linkText && linkHref}
      <span>
        {label.split(linkText)[0]}
        <a href={linkHref} class="text-blue-700 underline">{linkText}</a>
        {label.split(linkText)[1]}
      </span>
    {:else}
      <span>{label}</span>
    {/if}
  </div>
</label>