<script lang="ts">
    import { gql, GraphQLClient } from 'graphql-request'
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/HeaderHome.svelte'
    import type { PageData } from './$types';

    import { onMount } from 'svelte';

    export let data: PageData;

    const getData = async () => {
      const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
        },
      })

      const query = gql`
      query {
        gegevens(stage: DRAFT, last: 1) {
          id
          huidigOpgevangenWater
          inhoudRegenton
        }
      }
      `

      const gegevens = await graphQLClient.request(query);
      console.log(gegevens)
      updateTon(gegevens.gegevens);
      return gegevens.gegevens;
    }
    
    let openLeegButton;
    let closeLeeg;
    let dialog;
    let ton;

    onMount(() => {
        openLeegButton = document.getElementsByClassName('leeg')[0];
        closeLeeg = document.getElementsByClassName('terug')[0];
        dialog = document.getElementsByClassName('leegDialog')[0];
        ton = document.querySelector(".cls-9");
        openDialog();
        closeDialog();
    });

    function updateTon(ton) {
      let inhoudPercentage = 100 / ton[0].inhoudRegenton * ton[0].huidigOpgevangenWater;
      console.log("Percentage: " + inhoudPercentage);
      const r = document.querySelector(':root');
      const rs = getComputedStyle(r);
      if (inhoudPercentage < 20) {
        r.style.setProperty('--inhoudPercentage', '20%');
      } else {
        r.style.setProperty('--inhoudPercentage', `${inhoudPercentage}%`);
      }
    }

    function openDialog() {
        openLeegButton.addEventListener("click", () => {
        dialog.showModal();
      })
    }

    function closeDialog() {
        closeLeeg.addEventListener("click", () => {
        dialog.close();
     })
    }

    const getID = async () => {
      const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
        },
      })

      const query = gql`
      query {
        gegevens(stage: DRAFT, last: 1) {
          id
        }
      }
      `

      const gegevens = await graphQLClient.request(query);
      resetData(gegevens.gegevens[0].id);
      return gegevens.gegevens[0].id;

      const gras = document.getElementsByClassName('gras')[0];
      gras.style.backgroundcolor = "var(--color-green)";
      console.log(gras);
    }

    const resetData = async (id) => {
      const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`
      const gegevensId = id;

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
        },
      })

      const query = gql`
      mutation {
        updateBRAIN_data(data: {huidigOpgevangenWater: 0}, where: {id: "${gegevensId}"}) {
          huidigOpgevangenWater
        }
      }
      `

      const submit = await graphQLClient.request(query);
      console.log(submit)
      
      dialog.close();
      ton.classList.add("isLeeg")
    }
</script>

<Header />

<main class="landing">
    <section class="timeline">
      <section>
        <p>Nu</p>
        {#if data.daily.precipitation_sum[0] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[0]}<span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[1].slice(-2)}</p>
        {#if data.daily.precipitation_sum[1] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[1]}<span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[2].slice(-2)}</p>
        {#if data.daily.precipitation_sum[2] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
        <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[2]}<span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[3].slice(-2)}</p>
        {#if data.daily.precipitation_sum[3] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[3]}<span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[4].slice(-2)}</p>
        {#if data.daily.precipitation_sum[4] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[4]}<span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[5].slice(-2)}</p>
        {#if data.daily.precipitation_sum[5] > 0}
        <img src="images/druppel.svg" alt="icoon van regendruppels">
        {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[5]} <span>mm</span></p>
      </section>

      <section>
        <p>{data.daily.time[6].slice(-2)}</p>
        {#if data.daily.precipitation_sum[6] > 0}
          <img src="images/druppel.svg" alt="icoon van regendruppels">
          {:else} 
          <img src="images/wolk.svg" alt="icoon van wolk"> 
        {/if}
        <p>{data.daily.precipitation_sum[6]}<span>mm</span></p>
      </section>
    </section>

   <section class="barrel">
    <section class="info">
      <h2>Spatwater's Regenton</h2>
      {#await getData()}
        
      {:then gegevens}
      <p>{gegevens[0].huidigOpgevangenWater} / {gegevens[0].inhoudRegenton}L</p> 
        
      {/await}
    </section>

    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.5 434.5">
        <defs>
          <style>
            :root {
              --inhoudPercentage: 20%;
            }
            
            .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
              fill: none;
            }
      
            .cls-8 {
              fill: #ebebeb;
            }
      
            .cls-9 {
              fill: #384b61;
              transform: scaleY(50%) translateX(0px);
              transform-origin: bottom;
              transition: 1s;
              animation-fill-mode: forwards;
            }
            
            .isLeeg {
              transform: scaleY(20%) translateX(0px);
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
              transform: scaleY(100%) translateX(0px);
              transition: 2s;
              transform-origin: bottom;
            }
      
            .cls-7 {
              clip-path: url(#clippath);
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
            <path class="cls-9" d="m271.5,427H5.5V-15C41.19-4.27,86.67,4.89,139.5,4.77c51.94-.11,96.71-9.16,132-19.77v442Z"/>
          </g>
          <g>
            <path class="cls-3" d="m5,141.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
            <path class="cls-3" d="m5,297.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"/>
            <ellipse class="cls-10" cx="140" cy="22" rx="105" ry="19.5"/>
            <ellipse class="cls-4" cx="139" cy="22" rx="105" ry="19.5"/>
          </g>
        </g>
      </svg>

      <section class="background">
        <div class="gras"></div>
        <div></div>
        <div></div>
      </section>
      <button class="leeg">Leeg</button>
   </section>

   <dialog class="leegDialog">
      <h3>Regenton legen</h3>
      <p>Weet je zeker dat je je regenton wilt legen?</p>
      <section>
        <button class="terug">Terug</button>
        <button on:click={getID}>Leeg</button>
      </section>  
   </dialog>

    <Nav />

</main>

<style>

  main {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

    /* timeline */

    .timeline {
        height: 100%;
        width: 100%;
        display: flex;
        /* margin-bottom: 1em; */
        background-color: var(--color-blue-light);
    }

    .timeline p {
      font-family: var(--font-title);
      font-weight: var(--font-weight-semi-bold);
    }

    .timeline section {
      padding: .5em;
      width: calc(100% / 7);
      display: flex;
      flex-direction: column;
      gap: .4em;
      justify-content: space-between;
      align-items: center;
    }

    .timeline section:first-of-type {
      background-color: var(--color-blue-dark);
    }

    .timeline section:nth-last-child(2) {
      background-color: var(--color-green);
    }

    .timeline img {
      height: 1em;
      aspect-ratio: 1/1;
    }

    .timeline p {
      text-align: center;
      display: flex;
      flex-direction: column;
      color: var(--color-white);
    }

    .timeline p:last-of-type {
      font-size: .8em;
    }

    .timeline span {
      font-size: .7em;
    }

    /* regenton */

    .landing h2 {
        color: var(--color-blue-light);
        font-size: 1.5em;
        font-family: var(--font-title);
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: .3em;
        text-align: center;
        background-color: var(--color-background);
    }

    .info p {
        color: var(--color-blue-dark);
        font-weight: var(--font-weight-semi-bold);
        font-size: 1.25em;
        font-family: var(--font-title);
    }


    .leeg {
        border-radius: 8px;
        aspect-ratio: 5/1;
        cursor: pointer;
        display: block;
    }

    .barrel {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    .barrel svg {
        width: 55%;
        transform: translateX(20px);
    }

    .background {
      position: relative;
      width: 100%;
    }

    .background div {
      height: 1em
    }

    .background div:first-of-type {
      position: absolute;
      z-index: -1;
      top: -4.5em;
      width: 100%;
      height: 6em;
      background-color: #A6DAAC;
      animation: gras 2s forwards;
    }

    @keyframes gras {
      form {background-color: #A6DAAC;}
      to {background-color: #70DC7D;}
    } 

    .background div:nth-of-type(2) {
      height: 1.5em;
      background-color: #BEBEBE;
    }

    .background div:nth-of-type(3){
      background-color: #EDEDED;
    }

    /* popup */

    dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-grey);
      padding: 1em;
      border: 2px solid var(--color-blue-light);
      border-radius: .5em;
      max-width: 15em;
    }

    dialog section {
      display: flex;
      justify-content: space-between;
    }

    dialog button {
      cursor: pointer;
    }

    dialog h3 {
      margin-bottom: .5em;
    }

    dialog p {
      margin-bottom: 1.5em;
    }

    dialog .terug {
      background-color: var(--color-white);
      border: 1px solid var(--color-green);
      color: var(--color-green);
      font-weight: 100;
    }

    dialog::backdrop {
      background-color: rgb(0,0,0, .25);
    }
</style>