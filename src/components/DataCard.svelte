<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    // import DataCard from '../components/DataCard.astro';
    let data = writable([]);

    onMount(async () => {
        const repsonse = await fetch("https://vps01.getpraut.nl/influxapi/getdata.php");
        const jsonData = await repsonse.json();
        data.set(jsonData);

    })
</script>

{#each $data as item}
<div class="data-card">
    <h3></h3>
    <p>Value: {item.current.value}</p>
    <p>Timestamp: {item.currenttimestamp}</p>
</div>
{/each}