<script>
  import { gql, GraphQLClient } from 'graphql-request'

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
        aantalRegenpijpen
        dakOppervlakte
        inhoudRegenton
        typeDak
        postcode
        huisnummer
      }
    }
    `

    const data = await graphQLClient.request(query);
    console.log(data.gegevens);
    return data;
  }
</script>
  {#await getData()}   
    {:then data}
    {#each data.gegevens as gegevens }
    <section class="gegevens">
      <h2>Gegevens</h2>
      <section>
        <section>
          <p>Daktype</p>
          <p>{gegevens.typeDak}</p>
        </section>
        <div></div>
      </section>
      <section>
        <section>
          <p>Aantal vierkante meter van het huis</p>
          <p>{gegevens.dakOppervlakte}</p>
        </section>
        <div></div>
      </section>
      <section>
        <section>
          <p>Aantal regenpijpen</p>
          <p>{gegevens.aantalRegenpijpen}</p>
        </section>
        <div></div>
      </section>
      <section>
        <section>
          <p>Aantal liter in de regenton</p>
          <p>{gegevens.inhoudRegenton}</p>
        </section>
        <div></div>
      </section>
      <section>
        <section>
          <p>Adres</p>
          <p>{gegevens.postcode}, {gegevens.huisnummer}</p>
        </section>
        <div></div>
      </section>
    </section>
    {/each}
  {/await}

<style>
    .gegevens {
        display: flex;
        flex-direction: column;
        gap: 1.5em;}
    
    .gegevens > section {
        box-shadow: var(--shadow);
        background-color: var(--color-grey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    
    .gegevens> section > div{
        width: 1em;
        aspect-ratio: 1/1;
        border-top: var(--color-green) solid 3px;
        border-right: var(--color-green) solid 3px;
        rotate: 45deg;
    }
    
    .gegevens > section > section:first-of-type > p:first-of-type {
        font-weight: var(--font-weight-semi-bold);
    }

    .gegevens h2 {
        font-size: 1.5em;
    }
</style>