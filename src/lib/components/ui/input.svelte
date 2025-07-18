<script lang="ts">
  export let inputProps: InputProps;
</script>

<div class="relative font-roboto">
  <label
    for={inputProps.label}
    class="block text-lg font-semibold text-text-primary mb-1"
  >
  {#if inputProps.required}
      <span class="text-red-500">*</span>{/if}
    {inputProps.label}
  </label>
  <input
    type={inputProps.type || "text"}
    bind:value={inputProps.bindValue}
    placeholder={inputProps.placeholder}
    class={`block w-full px-4 py-3 placeholder:font-[300] border ${inputProps.error ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
    required={inputProps.required}
  />
  {#if inputProps.error}
    <p class="mt-1 text-sm text-red-600">{inputProps.error}</p>
  {/if}
</div>
