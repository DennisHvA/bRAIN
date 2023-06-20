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
				authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcxNzQyODYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjAzM2Y1NzAtNjkyYS00NGI1LTlhZTctNDE4ZDFhZDg4ZWNkIiwianRpIjoiY2xqMnMwYXl1MDBjdjAxdDRoaG9vaGRhZyJ9.kfyPp1m-m4jO_tHgPhPvWXp1vW_tdsZqxTYohqaVA-lWxnJtDDOpVsQme1dKC1MWDsmDW68b8cPhDz6cBILvH1OPupmFFlADpzhbWORGJTbiZZ1x1JgjtgzvdaC-_fSLNmYKOFMqGiqvhOUzLSG8r6kosNEROcK0j0BuJqX_PVKWvH0viHxerWH7aFPTPm6BNA2yO2YL6iUKaYjgTFKel_RJy3-g5QKoA3tOxK7ZRAiujE0wGPTHq3sM8zg9RltMZOLbkV5bRPTnL30YHoQQvMrK0HMsFUZMcpBHthQhA5Snwxpt1tKj3msnlwF9qxhznLf5GmQA_nFmZLCYf2ortiyfR9UEHt3j5rr0e6k7s2yY5QKjZG1Mzpd0Xbul7NP0HO-GyA3T66w4K1yhS-do8MbvP_-WvBwFp6wGGvJbt8v5P13T2RZ90oQPSA0PxiR6GyoMOAFZ1nj5G6dYaWg3al3mo4-WITHe5Z6CdsOFkWM7u6kz4_MNmwC-W-p6SYX1_V3hhuX7SOLufeMTy_intDtNfl-V7nYDaC62-uIDK9pl-U_dcSg7E-h8xc6GjAAg-6Og8WHF-W2lD9GKR9cusnaP0PIMwm9bmOC0KY3KGCPuxUOKaHukH2RxDoWAtrAnyDlsz0vWLI-PHKdiFRRSPV0Bfhbe8KDjtxrpdohRefA`,
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