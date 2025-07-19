<script lang="ts">
  let {
    type = "",
    label = "",
    bindValue = "",
    placeholder = "",
    required = false,
    error = "",
  } = $props();
</script>

<div class="relative font-roboto">
  <label for={label} class="block text-lg font-semibold text-text-primary mb-1">
    {#if required}
      <span class="text-red-500">*</span>{/if}
    {label}
  </label>
  <input
    type={type || "text"}
    bind:value={bindValue}
    {placeholder}
    class={`block w-full px-4 py-3 placeholder:font-[300] border ${error ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
    {required}
  />
  {#if error}
    <p class="mt-1 text-sm text-red-600">{error}</p>
  {/if}
</div>
