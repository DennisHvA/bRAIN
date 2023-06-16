<script lang="ts">
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/Header.svelte'

    export let today = new Date();

    const getData = async () => {
        const startDate = new Date();
        const endDate = new Date();

        startDate.setDate(startDate.getDate() - 3);
        endDate.setDate(endDate.getDate() + 3);

        const startDateMonth = ('0' + startDate.getMonth()).slice(-2)
        const endDateMonth = ('0' + endDate.getMonth()).slice(-2)

        const startDateFormat = startDate.getFullYear() + '-' + startDateMonth + '-' + startDate.getDate();
        const endDateFormat = endDate.getFullYear() + '-' + endDateMonth + '-' + endDate.getDate();

        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&daily=precipitation_sum&forecast_days=3&start_date=${startDateFormat}&end_date=${endDateFormat}&timezone=Europe%2FBerlin`);
        const data = await response.json();
        console.log(data.daily.precipitation_sum[1])
        return data;
    }
</script>

<Header />

<main class="landing">
    <section class="timeline">
        {#await getData()}
            {:then data} 
            <p>
                {today.getDate() - 3}
                <br>
                {#if data.daily.precipitation_sum[0] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p>
                {today.getDate() - 2}
                <br>
                {#if data.daily.precipitation_sum[1] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p>
                {today.getDate() - 1}
                <br>
                {#if data.daily.precipitation_sum[2] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p class="current">
                {today.getDate()}
                <br>
                {#if data.daily.precipitation_sum[3] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p>
                {today.getDate() + 1}
                <br>
                {#if data.daily.precipitation_sum[4] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p>
                {today.getDate() + 2}
                <br>
                {#if data.daily.precipitation_sum[5] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
            <p>
                {today.getDate() + 3}
                <br>
                {#if data.daily.precipitation_sum[6] > 0}
                    <img src="images/druppels.png" alt="neerslag">
                {/if}
            </p>
        {/await}
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
        position: absolute;
        bottom: 5em;
        left: 50%;
        transform: translateX(-50%);
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
        padding: 0;
        height: 50px;
        width: 100%;
        color: var(--color-white);
        background: var(--color-blue-light);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .timeline img {
        width: 20%;
    }
    
    .timeline .current {
        height: 65px;
        font-size: 1.5em;
        border-radius: 0 0 10px 10px;
        background: var(--color-blue-dark);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
    }
</style>