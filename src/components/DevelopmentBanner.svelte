<script>
    import { onMount } from 'svelte';
  
    let isDevelopment = true;
    const idDev = import.meta.env.DEV;
    onMount(() => {
      isDevelopment = import.meta.env.ASTRO_ENV === 'development';
      console.log(isDevelopment);
    });
  </script>
{#if  !idDev === false}
<div class="text-center font-bold text-lg text-red-500 bg-red-900 outline mb-4 outline-4 outline-red-500 text-yellow-400">DEVELOPMENT</div>
{/if}