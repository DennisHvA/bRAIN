<script lang="ts">
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/Header.svelte'
    import type { PageData } from './$types';

    export let today = new Date();
    export let data: PageData;
</script>

<Header />

<main class="landing">
    <section class="timeline">
        <p>
            Nu
            <br>
            {#if data.daily.precipitation_sum[0] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}
            5mm
        </p>
        <p>
            {today.getDate() + 1}
            <br>
            {#if data.daily.precipitation_sum[1] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}
            0mm
        
        </p>
        <p>
            {today.getDate() + 2}
            <br>
            {#if data.daily.precipitation_sum[2] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}

            0mm
            </p>
        <p>
            {today.getDate() + 3}
            <br>
            {#if data.daily.precipitation_sum[3] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}
            0mm
        </p>
        <p>
            {today.getDate() + 4}
            <br>
            {#if data.daily.precipitation_sum[4] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}
            10mm
        </p>
        <p>
            {today.getDate() + 5}
            <br>
            {#if data.daily.precipitation_sum[5] > 0}
                <img src="images/druppels.png" alt="neerslag">
                {:else} 
                <img src="images/sun.png" alt="sunny"> 
            {/if}
            0mm
        </p>
        <p>
            {today.getDate() + 6}
            <br>
            {#if data.daily.precipitation_sum[6] > 0}
                <img src="images/druppels.png" alt="neerslag">
            {:else} 
                <img src="images/sun.png" alt="sunny">   
            {/if}
            0mm
        </p>
    </section>

   <section class="info">
        <h2>Spatwater's Regenton</h2>
        <p>125/250L</p>
   </section>

   <section class="barrel">
        <img src="images/regenton.png" alt="regenton">
   </section>


   <button class="leeg">Leeg</button>

    <Nav />

</main>

<style>
    .landing h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
    }

    .info {
        text-align: center;
        background-color: var(--color-background);
    }

    .info p {
        color: var(--color-blue-dark);
        font-weight: var(--font-weight-semi-bold);
        font-size: 1.25em;
        padding: .5em 0 1em 0;
    }


    .leeg {
        border-radius: 8px;
        aspect-ratio: 5/1;
        cursor: pointer;
        margin: 1em auto;
        display: block;
    }

    .barrel {
        display: flex;
        justify-content: center;
    }

    .barrel img {
        width: 55%;
        transform: translateX(20px);
    }

    .timeline {
        height: 65px;
        width: 100%;
        display: flex;
        margin-bottom: 1em;
    }
    
    .timeline p {
        margin: 0;
        padding: 0.5em;
        height: 4em;
        font-size: .8em;
        width: 100%;
        color: var(--color-white);
        background: var(--color-blue-light);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .timeline img {
        width: 20%;
    }
</style>