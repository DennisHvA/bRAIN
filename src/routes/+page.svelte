<main class="onboard">

	<section id="step-0" class="step active">
		<h1>bRAIN</h1>
		<p>Wij helpen je met het opvangen van regenwater.</p>
		<button>Start</button>
	</section>

	<form id="step-1" class="step">
		<h2>Hoe ziet je dak eruit?</h2>
		<label for="daktype">
			<input type="radio" name="daktype" checked />
			Plat
		</label>
		<label for="daktype">
			<input type="radio" name="daktype" />
			Schuin
		</label>
		<label for="daktype">
			<input type="radio" name="daktype" />
			Punt
		</label>
		<button type="button">Next</button>
	</form>

	<form id="step-2" class="step">
		<h2>Wat is het oppervlakte van je dak?</h2>
		<label for="daktype">
			<input type="text" name="daktype" placeholder="aantal vierkantemeter (m2)" />
		</label>
		<button type="button">Back</button>
		<button type="button">Next</button>
	</form>

	<form id="step-3" class="step">
		<h2>Hoeveel regenpijpen heb je?</h2>
		<label for="daktype">
			<input type="number" name="daktype" placeholder="aantal regenpijpen" />
		</label>
		<button type="button">Back</button>
		<button type="button">Next</button>
	</form>

	<form id="step-4" class="step">
		<h2>Hoeveel liter water kan je er in je regenton?</h2>
		<label for="daktype">
			<input type="text" name="daktype" />
			(L) Liter water
		</label>
		<button type="button">Back</button>
		<button type="button">Next</button>
	</form>

	<form id="step-5" class="step" action="/home">
		<h2>Wat is je adres? Deze hebben wij nodig om te bepalen hoeveel regen er valt.</h2>
		<label for="postcode"
			>Postcode:
			<input type="text" name="postcode" />
		</label>
		<label for="huisnummer"
			>Huisnummer:
			<input type="text" name="huisnummer" />
		</label>
		<button type="button">Back</button>
		<button type="submit">Next</button>
	</form>

	<section class="progress-active">
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
	</section>
</main>
