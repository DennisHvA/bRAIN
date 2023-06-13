<script lang="ts">
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

<main class="landing">
    <header>
        <section>
            <h1>bRAIN</h1>
        </section>   
    </header>

    <section class="timeline">
        {#await getData()}
            {:then data} 
            <p>
                {today.getDate() - 3}
                <br>
                {#if data.daily.precipitation_sum[0] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p>
                {today.getDate() - 2}
                <br>
                {#if data.daily.precipitation_sum[1] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p>
                {today.getDate() - 1}
                <br>
                {#if data.daily.precipitation_sum[2] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p class="current">
                {today.getDate()}
                <br>
                {#if data.daily.precipitation_sum[3] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p>
                {today.getDate() + 1}
                <br>
                {#if data.daily.precipitation_sum[4] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p>
                {today.getDate() + 2}
                <br>
                {#if data.daily.precipitation_sum[5] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
            <p>
                {today.getDate() + 3}
                <br>
                {#if data.daily.precipitation_sum[6] > 0}
                    <img src="wolkje.png">
                {/if}
            </p>
        {/await}
    </section>

   <section class="info">
        <section class="tiles">
            <div class="full-date">
                <p class="info-text">Verwachte vol datum</p>
                <p class="data-info">15 Juli</p>
            </div>
            <div class="rain-date">
                <p class="info-text">Volgende regenval</p>
                <p class="data-info">28 Juni</p>
            </div>
        </section>


        <h2>Spatwater's Regenton</h2>
   </section>

   <section class="barrel">
    
   </section>


   <button class="leeg">Leeg</button>

    <nav>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Totaal opgevangen</a>
            </li>
            <li>
                <a href="#">Profiel</a>
            </li>
        </ul>
    </nav>

</main>