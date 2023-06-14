<header>
	<section>
		<h1>bRAIN</h1>
	</section>   
</header>

<main class="onboard">

	<form action="/gegevens">
		<fieldset id="step-1" class="step active" >
			<legend>Hoe ziet je dak eruit?</legend>
			<section class="daken">
				<label for="daktype">
					<input type="radio" name="daktype" id="daktype" checked />
					<img src="/images/plat.png" alt="">
				</label>
				<label for="daktype">
					<input type="radio" name="daktype" id="daktype"/>
					<img src="/images/schuin.png" alt="">
				</label>
				<label for="daktype">
					<input type="radio" name="daktype" id="daktype"/>
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
			<legend>Wat is je adres? Deze hebben wij nodig om te bepalen hoeveel regen er valt.</legend>
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
.onboard {
    padding: 0.5em 1em;
}

.onboard fieldset > img {
    width: 10em;
}

.onboard > section {    
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.onboard fieldset:first-of-type label {
    width: 7.5em;
    aspect-ratio: 1/1;
    background-color: var(--color-grey);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;
}

.onboard fieldset:first-of-type label img {
    width: 5em;
}

.onboard .daken {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: center;
}

.onboard fieldset section:last-of-type {
    position: absolute;
    bottom: 2em;
    display: flex;
    justify-content: space-between;
}

.onboard > .progress {
    display: none;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
    position: absolute;
    bottom: 7.5em;
    left: 50%;
    transform: translateX(-50%);
}

.onboard > .progress div {
    background-color: var(--color-white);
    border: 2px solid var(--color-green);
    width: 1.5em;
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.onboard > .progress div:first-of-type {
    background-color: var(--color-green);
}

.onboard .step {
    display: none;
}
  
.onboard .step.active {
    display: flex;
}

.onboard .progress.active {
    display: flex;
}
</style>
