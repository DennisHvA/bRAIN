<script lang="ts">
    import Header from '$lib/components/Header.svelte'
	import { gql, GraphQLClient } from 'graphql-request'
	import { onMount } from 'svelte';

	let currentStep;
	let circles;
	let steps;
	let step;

	onMount(() => {
		currentStep = 0;
		steps = document.querySelectorAll(".step");
		circles = document.querySelectorAll(".circle");
		updateProgressIndicator();
	});

	function updateProgressIndicator() {
		for (let i = 0; i < circles.length; i++) {
			if (i === currentStep) {
				circles[i].style.backgroundColor = 'var(--color-green)';
			} else {
				circles[i].style.backgroundColor = 'transparent';
			}
		}
  	}

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data)

		step = document.querySelectorAll(`#step-${currentStep + 1} input`)
		console.log(step)
		if (step[0].value !== "" && step[1].value !== "") {
			const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`

			const graphQLClient = new GraphQLClient(endpoint, {
				headers: {
					authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`,
				},
			})

			const query = gql`
			mutation {
				createBRAIN_data(data: { userId: 0, aantalRegenpijpen: ${data.pipes}, dakOppervlakte: ${data.size}, inhoudRegenton: ${data.liter}, typeDak: Plat, postcode: "${data.zip}", huisnummer: "${data.huisnummer}", huidigOpgevangenWater: 100, totaalOpgevangenWater: 0 }) {
					userId
					aantalRegenpijpen
					dakOppervlakte
					inhoudRegenton
					typeDak
					postcode
					huisnummer
					huidigOpgevangenWater
					totaalOpgevangenWater
				}
			}
			`

			const data2 = graphQLClient.request(query)
			console.log(data2)
		} else {
			e.preventDefault();
			step.forEach((step) => {
				if (step.value === "") {
					step.style.border = "2px solid red";
				} else {
					step.style.border = "2px solid var(--color-green)";
				}
			});
		}
	}

	function nextStep() {
		step = document.querySelector(`#step-${currentStep + 1} input`)
		console.log(step)
		if (step.value !== "") {
			step.style.border = "2px solid var(--color-green)";
			if (currentStep < steps.length) {
				steps[currentStep].classList.remove("active");
				currentStep++;
				steps[currentStep].classList.add("active");
				updateProgressIndicator();
			}
		} else {
			step.style.border = "2px solid red";
		}
	}

	function previousStep() {
		if (currentStep > 0) {
			steps[currentStep].classList.remove("active");
			currentStep--;
			steps[currentStep].classList.add("active");
			updateProgressIndicator();
		}
	}
</script>

<Header />

<main class="onboard">

	<form action="/gegevens" on:submit={onSubmit}>
		<fieldset id="step-1" class="step active">
			<legend>Hoe ziet je dak eruit?</legend>
			<p>Deze informatie is nodig om de oppervlakte van je dak te berekenen</p>
			<section class="daken">
			  <input type="radio" name="daktype" id="plat" checked />
			  <label for="plat">
				<img src="/images/plat.png" alt="" />
			  </label>
			  <input type="radio" name="daktype" id="schuin" />
			  <label for="schuin">
				<img src="/images/schuin.png" alt="" />
			  </label>
			  <input type="radio" name="daktype" id="punt" />
			  <label for="punt">
				<img src="/images/punt.png" alt="" />
			  </label>
			</section>
			<section>
			  <button type="button" on:click={nextStep}>Volgende</button>
			</section>
		  </fieldset>
	  
		  <fieldset id="step-2" class="step">
			<legend>Hoeveel vierkante meter(m2) is je huis?</legend>
			<p>Deze informatie is nodig om de oppervlakte van je dak te berekenen</p>
			<label for="size">
			  <input type="text" name="size" placeholder="aantal vierkantemeter" id="size"/>
			  (m2)
			</label>
			<img src="/images/plat2.png" alt="">
			<img src="/images/schuin2.png" alt="">
			<img src="/images/punt2.png" alt="">
			<section>
			  <button type="button" on:click={previousStep}>Terug</button>
			  <button type="button" on:click={nextStep}>Volgende</button>
			</section>
		  </fieldset>
	  
		  <fieldset id="step-3" class="step">
			<legend>Hoeveel regenpijpen heb je?</legend>
			<p>Deze informatie is nodig om te bepalen hoeveel regen er in de regenton terecht komt</p>
			<label for="pipes">
			  <input type="number" name="pipes" placeholder="aantal regenpijpen" id="pipes" />
			</label>
			<img src="/images/regenpijp.png" alt="" />
			<section>
			  <button type="button" on:click={previousStep}>Terug</button>
			  <button type="button" on:click={nextStep}>Volgende</button>
			</section>
		  </fieldset>
	  
		  <fieldset id="step-4" class="step">
			<legend>Hoeveel liter water kan je er in je regenton?</legend>
			<p>Deze informatie is nodig om uit te rekeken wanneer de regenton vol zit</p>
			<label for="liter">
			  <input type="text" name="liter" id="liter" placeholder="aantal liter"/>
			  (L)
			</label>
			<img src="/images/regenton.png" alt="" />
			<section>
			  <button type="button" on:click={previousStep}>Terug</button>
			  <button type="button" on:click={nextStep}>Volgende</button>
			</section>
		  </fieldset>
	  
		  <fieldset id="step-5" class="step">
			<legend>Wat is je adres?</legend>
			<p>Deze informatie is nodig om te bepalen of er regent valt en hoeveel</p>
			<label for="zip">
			  <input type="text" name="zip" id="zip" placeholder="plaatsnaam"/>
			</label>
			<label for="huisnummer">
			  <input type="text" name="huisnummer" id="huisnummer" placeholder="straatnaam huisnummer"/>
			</label>
			<img src="/images/huis.png" alt="" />
			<section>
			  <button type="button" on:click={previousStep}>Terug</button>
			  <button type="submit">Submit</button>
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

main {
	padding: .5em 2em .5em 2em;
	display: flex;
	flex-direction: column;
	gap: 2em;
	justify-content: space-between;
    height: calc(100vh - 10em);
}

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
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
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

fieldset:nth-of-type(2) img {
	display: none;
}

:has(fieldset:first-of-type input[type="radio"]:nth-of-type(1):checked) fieldset:nth-of-type(2) img:nth-of-type(1) {
	display: block;
}

:has(fieldset:first-of-type input[type="radio"]:nth-of-type(2):checked) fieldset:nth-of-type(2) img:nth-of-type(2) {
	display: block;
}

:has(fieldset:first-of-type input[type="radio"]:nth-of-type(3):checked) fieldset:nth-of-type(2) img:nth-of-type(3) {
	display: block;
}

input[type=radio]:checked + label {
  background-color: var(--color-blue-light);
  transition: .5s;
}

fieldset:first-of-type label img {
    width: 5em;
}

fieldset .daken {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

fieldset:last-of-type p {
	font-size: 1.2em;
}

fieldset section:last-of-type {
    position: absolute;
    bottom: 2em;
	gap: 7em;
    display: flex;
    justify-content: space-between;
	margin: 0 auto;
}

main > section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
}

main > section div {
    background-color: var(--color-white);
    border: 2px solid var(--color-green);
    width: 1.5em;
    aspect-ratio: 1/1;
    border-radius: 50%;
}

main > section div:first-of-type {
    background-color: var(--color-green);
}

.step {
    display: none;
}
  
.step.active {
    display: flex;
}

fieldset > label {
	width: 100%;
}

input[type="text"] {
	width: 15em;
}
</style>