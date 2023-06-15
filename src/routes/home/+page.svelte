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
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p>
                {today.getDate() - 2}
                <br>
                {#if data.daily.precipitation_sum[1] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p>
                {today.getDate() - 1}
                <br>
                {#if data.daily.precipitation_sum[2] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p class="current">
                {today.getDate()}
                <br>
                {#if data.daily.precipitation_sum[3] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p>
                {today.getDate() + 1}
                <br>
                {#if data.daily.precipitation_sum[4] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p>
                {today.getDate() + 2}
                <br>
                {#if data.daily.precipitation_sum[5] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
            <p>
                {today.getDate() + 3}
                <br>
                {#if data.daily.precipitation_sum[6] > 0}
                    <img src="images/druppels.png" alt="">
                {/if}
            </p>
        {/await}
    </section>

   <section class="info">
        <h2>Spatwater's Regenton</h2>
        <p>125/250L</p>
   </section>

   <section class="barrel">
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.5 434.5">
        <defs>
          <style>
            .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
              fill: none;
            }
      
            .cls-8 {
              fill: #ebebeb;
            }
      
            .cls-9 {
              fill: #384b61;
              transform: scale(1, 0.45);
              transform-origin: bottom;
            }
      
            .cls-2 {
              stroke: #4ecd5d;
            }
      
            .cls-2, .cls-10, .cls-3, .cls-4, .cls-5, .cls-6 {
              stroke-linecap: round;
            }
      
            .cls-2, .cls-3 {
              stroke-width: 10px;
            }
      
            .cls-2, .cls-4, .cls-6 {
              stroke-linejoin: round;
            }
      
            .cls-10 {
              opacity: .25;
            }
      
            .cls-10, .cls-3, .cls-5 {
              stroke-miterlimit: 10;
            }
      
            .cls-10, .cls-3, .cls-5, .cls-6 {
              stroke: #d8d8d8;
            }
      
            .cls-10, .cls-5 {
              stroke-width: 5px;
            }
      
            .cls-4 {
              stroke: #7faec5;
            }
      
            .cls-4, .cls-6 {
              stroke-width: 15px;
            }
      
            .cls-7 {
              clip-path: url(#clippath);
            }
          </style>
          <clipPath id="clippath">
            <rect class="cls-1" x="5.5" y="4" width="266" height="423" rx="77.35" ry="77.35"/>
          </clipPath>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <g>
              <line class="cls-4" x1="315.7" y1="427" x2="315.7" y2="347"/>
              <polyline class="cls-2" points="288.85 327.7 288.85 306.22 340.5 306.22"/>
              <polyline class="cls-6" points="315.7 352.95 315.7 327.7 262 327.7"/>
            </g>
            <g class="cls-7">
              <rect class="cls-8" x="5.5" y="4" width="266" height="423"/>
              <path class="cls-9" d="m271.5,427H5.5V-59c35.69,11.8,81.17,21.87,134,21.74,51.94-.13,96.71-10.07,132-21.74v486Z"/>
            </g>
            <g>
              <path class="cls-3" d="m5,141.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
              <path class="cls-3" d="m5,297.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
              <ellipse class="cls-10" cx="140" cy="22" rx="105" ry="19.5"/>
              <ellipse class="cls-5" cx="139" cy="22" rx="105" ry="19.5"/>
            </g>
          </g>
        </g>
      </svg>
   </section>


   <button class="leeg">Leeg</button>

    <Nav />

</main>