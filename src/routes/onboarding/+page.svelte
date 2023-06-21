<script lang="ts">
    import Header from '$lib/components/Header.svelte'
	import { gql, GraphQLClient } from 'graphql-request'

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data)

		const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`

		const graphQLClient = new GraphQLClient(endpoint, {
			headers: {
				authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
			},
		})

		const query = gql`
		mutation {
			createBRAIN_data(data: { aantalRegenpijpen: ${data.pipes}, dakOppervlakte: ${data.size}, inhoudRegenton: ${data.liter}, typeDak: Plat }) {
				aantalRegenpijpen
				dakOppervlakte
				inhoudRegenton
				typeDak
			}
		}
		`

		const data2 = graphQLClient.request(query)
		console.log(data2)
	}
</script>

<Header />

<main class="onboard">

	<form on:submit|preventDefault={onSubmit}>
		<fieldset id="step-1" class="step active" >
			<legend>Hoe ziet je dak eruit?</legend>
			<section class="daken">
				<input type="radio" name="daktype" id="plat" checked />
				<label for="plat">
					<img src="/images/plat.png" alt="">
				</label>
				<input type="radio" name="daktype" id="schuin"/>
				<label for="schuin">
					<img src="/images/schuin.png" alt="">
				</label>
				<input type="radio" name="daktype" id="punt"/>
				<label for="punt">
					<img src="/images/punt.png" alt="">
				</label>
			</section>
			<section>
				<button type="button">Volgende</button>
			</section>
		</fieldset>

		<fieldset id="step-2" class="step">
			<legend>Wat is het oppervlakte van je dak?</legend>
			<label for="size">
				<input type="text" name="size" placeholder="aantal vierkantemeter (m2)" id="size"/>
			</label>
			<img src="/images/m2.png" alt="">
			<section>
				<button type="button">Terug</button>
				<button type="button">Volgende</button>
			</section>
		</fieldset>

		<fieldset id="step-3" class="step">
			<legend>Hoeveel regenpijpen heb je?</legend>
			<label for="pipes">
				<input type="number" name="pipes" placeholder="aantal regenpijpen" id="pipes"/>
			</label>
			<img src="/images/regenpijp.png" alt="">
			<section>
				<button type="button">Terug</button>
				<button type="button">Volgende</button>
			</section>
		</fieldset>

		<fieldset id="step-4" class="step">
			<legend>Hoeveel liter water kan je er in je regenton?</legend>
			<label for="liter">
				<input type="text" name="liter" id="liter"/>
				(L) Liter water
			</label>
			<img src="/images/regenton.png" alt="">
			<section>
				<button type="button">Terug</button>
				<button type="button">Volgende</button>
			</section>
		</fieldset>

		<fieldset id="step-5" class="step">
			<legend>Wat is je adres?</legend>
			<p>Deze hebben wij nodig om te bepalen hoeveel regen er valt</p>
			<label for="zip"
				>Postcode:
				<input type="text" name="zip" id="zip"/>
			</label>
			<label for="huisnummer"
				>Huisnummer:
				<input type="text" name="huisnummer" id="huisnummer"/>
			</label>
			<img src="/images/huis.png" alt="">
			<section>
				<button type="button">Terug</button>
				<button type="submit">Volgende</button>
			</section>
		</fieldset>
	</form>

	<section class="progress active">
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
	</section>
</main>

<style>

fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
	align-items: center;
    gap: 1em;
    border: none;
}

legend {
	font-size: var(--font-size-2);
	font-weight: var(--font-weight-semi-bold);
	margin-bottom: 1em;
	text-align: center;
}

fieldset > img {
    width: 10em;
}

main > section {    
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

fieldset:first-of-type input[type="radio"] {
	display: none;
}

fieldset:first-of-type label {
    width: 7.5em;
    aspect-ratio: 1/1;
    background-color: var(--color-grey);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;
	border-radius: .5em;
}

input[type=radio]:checked + label {
  background-color: var(--color-blue-light);
  transition: .5s;
}

fieldset:first-of-type label img {
    width: 5em;
}

.daken {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: center;
}

fieldset:last-of-type p {
	font-size: 1.2em;
}

fieldset section:last-of-type {
    position: absolute;
    bottom: 2em;
	gap: 8em;
    display: flex;
    justify-content: space-between;
}

.progress {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
    position: absolute;
    bottom: 7.5em;
    left: 50%;
    transform: translateX(-50%);
}

.progress div {
    background-color: var(--color-white);
    border: 2px solid var(--color-green);
    width: 1.5em;
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.progress div:first-of-type {
    background-color: var(--color-green);
}

.step {
    display: none;
}
  
.step.active {
    display: flex;
}

</style>