 <main class="onboard">

	<form action="/gegevens">
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

legend {
	font-size: var(--font-size-2);
	font-weight: var(--font-weight-semi-bold);
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

fieldset section:last-of-type {
    position: absolute;
    bottom: 2em;
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