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
      
            .cls-2, .cls-5, .cls-6 {
              stroke-linejoin: round;
            }
      
            .cls-10 {
              opacity: .25;
            }
      
            .cls-10, .cls-3, .cls-4 {
              stroke-miterlimit: 10;
            }
      
            .cls-10, .cls-3, .cls-4, .cls-5 {
              stroke: #d8d8d8;
            }
      
            .cls-10, .cls-4 {
              stroke-width: 5px;
            }
      
            .cls-5, .cls-6 {
              stroke-width: 15px;
            }
      
            .cls-6 {
              stroke: #77c4e3;
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
              <line class="cls-6" x1="315.7" y1="427" x2="315.7" y2="347"/>
              <polyline class="cls-2" points="288.85 327.7 288.85 306.22 340.5 306.22"/>
              <polyline class="cls-5" points="315.7 352.95 315.7 327.7 262 327.7"/>
            </g>
            <g class="cls-7">
              <rect class="cls-8" x="5.5" y="4" width="266" height="423"/>
              <path class="cls-9" d="m271.5,427H5.5V-59c35.69,11.8,81.17,21.87,134,21.74,51.94-.13,96.71-10.07,132-21.74v486Z"/>
            </g>
            <g>
              <path class="cls-3" d="m5,141.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
              <path class="cls-3" d="m5,297.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
              <ellipse class="cls-10" cx="140" cy="22" rx="105" ry="19.5"/>
              <ellipse class="cls-4" cx="139" cy="22" rx="105" ry="19.5"/>
            </g>
          </g>
        </g>
      </svg>
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

    .barrel svg {
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
        height: 16px;
    }
</style>