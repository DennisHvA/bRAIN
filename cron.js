import { gql, GraphQLClient } from 'graphql-request'

let today = new Date();
let month = today.getMonth() + 1;
let monthFormat = ('0' + month).slice(-2)
let date = today.getFullYear() + '-' + monthFormat + '-' + today.getDate();
console.log(date);

const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&daily=precipitation_sum&forecast_days=3&start_date=${date}&end_date=${date}&timezone=Europe%2FBerlin`;
console.log(apiURL);

async function getData() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data.daily.precipitation_sum[0]);
    getDatabaseAndUpdate(data.daily.precipitation_sum[0]);
}

async function getDatabaseAndUpdate(rainfall) {
    const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
      },
    })

    const read = gql`
    query {
        gegevens(stage: DRAFT, last: 3) {
            id
            huidigOpgevangenWater
            totaalOpgevangenWater
        }
    }
    `

    const data = await graphQLClient.request(read);

    data.gegevens.forEach((element) => {
        async function updateDatabase() {
            const dakOppervlakte = 100;
            const literWater = rainfall * dakOppervlakte;
            const opgevangenWater = element.huidigOpgevangenWater + literWater;
            console.log(opgevangenWater);
            const id = element.id;

            const update = gql`
            mutation {
                updateBRAIN_data(data: {huidigOpgevangenWater: ${opgevangenWater}}, where: {id: "${id}"}) {
                    huidigOpgevangenWater
                }
            }
            `

            const updateData = await graphQLClient.request(update);
            console.log(updateData);
            return updateData;
        }
        updateDatabase();
    })
}

getData();