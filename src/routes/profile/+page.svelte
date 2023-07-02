<script>
    import Header from '$lib/components/HeaderHome.svelte'
    import GegevensHuis from '$lib/components/GegevensHuis.svelte'
    import Nav from '$lib/components/Nav.svelte'

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

<Header />

<main class="profile">

    <h2>Profiel</h2>

    <section class="general-info">
        <section class="profile-infoblock">
            <section>
                <p>Email</p>
                <p>b-rain@spatwater.nl</p>
            </section>
        </section>


        <section class="profile-infoblock">
            <section>
                <p>Locatie</p>
                <p>{gegevens.postcode}, {gegevens.huisnummer}</p>
            </section>
        </section>


        <section class="roofs">
            <section class="house">
                <img src="images/houseprofile.png" alt="">
                <section>
                    <p>Huis dak 1</p>
                </section>
                <section class="detail-info">
                    <section class="barrel-infoblock">
                        <section>
                            <p>Regenton 1</p>
                            <img src="images/regenton.png" alt="regenton">
                        </section>
                        <button>
                            +
                        </button>
                    </section>

                    <section class="profile-gegevens">
                        <GegevensHuis/>
                    </section>
                </section>
            </section>

            <button class="homeadd">
                Huis toevoegen
            </button>

        </section>

    </section>
    

    <Nav />
    
</main>

    {/each}
{/await}

<style>

    .profile {
        background-color: var(--color-grey);
        border-radius: 2em 2em 0 0;
        padding: 0;
    }

    .profile h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;
    }
    
    .profile > section {
        padding: 1em;
    }

    .general-info {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .profile-infoblock {
        box-shadow: var(--shadow);
        background-color: var(--color-grey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    .profile-infoblock p:first-of-type {
        font-weight: var(--font-weight-semi-bold);
        gap: .5em;
    }

    .roofs {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-bottom: 5em;
    }

    .roofs .house {
        border-radius: .5em;
        border: 2px solid var(--color-blue-light);
        font-weight: var(--font-weight-semi-bold);
        box-shadow: var(--shadow);
    }

    .roofs .house img {
        width:100%;
    }

    .roofs .house section > p {
        background-color: var(--color-blue-light);
        padding: .5em 1em;
        color: var(--color-white);
    }

    .detail-info {
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .barrel-infoblock {
        display: flex;
        gap: 1.5em;
        color: var(--color-blue-dark);
        border-radius: .5em;
        align-items: center;
    }

    .barrel-infoblock section img {
        width:100%;
        padding: .5em;
        height: 8em;
        max-width: 7.5em;
    }

    .barrel-infoblock button {
        height: 50%;
        border-radius: 50%;
    }

    .homeadd {
        width: 100%;
        max-width: 10em;
        margin: 0 auto;
    }
</style>