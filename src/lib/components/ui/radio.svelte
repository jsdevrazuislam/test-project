<script lang="ts">
  export let name: string = "";
  export let value: string = "";
  export let selected: string = '';
  export let label: string = "";
  export let disabled: boolean = false;
</script>

<label class="custom-radio-container">
  <input
    type="radio"
    {name}
    {value}
    bind:group={selected}
    {disabled}
    class="sr-only"
  />
  <span class="custom-radio">
    <span class="custom-radio-inner"></span>
  </span>
  <span class="custom-radio-label">{label}</span>
</label>

<style>
  .custom-radio-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
  }

  .custom-radio {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: .8rem;
    height: .8rem;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  .custom-radio-inner {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.2s ease;
  }

  input:checked + .custom-radio {
    border-color: #fcc00f;
    border-width: 4px;
  }

  input:checked + .custom-radio .custom-radio-inner {
    background-color: #fff;
  }

  .custom-radio-label {
    font-size: 14px;
    color: #303133;
  }

  input:disabled + .custom-radio {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
