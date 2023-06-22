<script lang="ts">
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main class="stats">
    <h2>Statistieken</h2>
    
    <section class="total">
        <p>Totaal opgevangen</p>
        <p>502 Liter</p>
        <section class="milestone">
            <div class="slider">
                <figure class="done">
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>250L</p>
                        <p>Klein zwembad</p>
                    </section> 
                </figure>

                <figure>
                    <div class="showMilestone"><i class="fa-solid fa-chevron-down"></i></div>
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>500L</p>
                        <p>Groot zwembad</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>1000L</p>
                        <p>Veel</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>2000L</p>
                        <p>Heel veel</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>5000L</p>
                        <p>Ja idk nog meer</p>
                    </section>
                </figure>
            </div>
        </section>
    </section>

    <section class="barrelStats">
        <p>Regentonnen</p>
        <section>
            <div>
                <p>Regenton 1</p>
                <img src="images/regenton.png" alt="regenton">
                <p class="statsInfo">100L</p>
                <p class="statsInfo">2x geleegd</p>
            </div>
            <div>
                <p>Regenton 2</p>
                <img src="images/regenton.png" alt="regenton">
                <p class="statsInfo">300L</p>
                <p class="statsInfo">10x geleegd</p>
            </div>
            <div>
                <p>Regenton 3</p>
                <img src="images/regenton.png" alt="regenton">
                <p class="statsInfo">102L</p>
                <p class="statsInfo">7x geleegd</p>
            </div>
        </section>
    </section>



    <Nav />

</main>

<style>
    .stats {
        background-color: var(--color-white);
        border-radius: 2em 2em 0 0;
        height: 100%;
    }

    .stats h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;
    }

    .total,
    .barrelStats {
        background-color: var(--color-grey);
        color: var(--color-blue-dark);
        margin: 0 1em 2em 1em;
        border-radius: .5em;
        box-shadow: var(--shadow);
    }

    .total p:nth-of-type(1),
    .barrelStats p:nth-of-type(1)  {      
        font-family: 100;
        padding: .5em;
        font-size: 1em;
    }

    .total p:nth-of-type(2) {
        padding: .5em;
        text-align: center;
        font-size: 2em;
        font-weight: var(--font-weight-semi-bold);
    }

    .milestone {
        position: relative;
    }

    .showMilestone {
        position: absolute;
        display: grid;
        place-content: center;
        color: var(--color-white);
        position: absolute;
        background-color: var(--color-green);
        width: 2em;
        aspect-ratio: 1/1;
        border-radius: 50%;
        left: 50%;
        top: -1em;
        transform: translateX(-50%);
    }
    
    .slider {
        display: flex;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        padding-top: 1em;
    }

    .slider figure {
        width: 100%;
        margin: .5em;
        scroll-snap-align: center;
        position: relative;
    }

    .slider figure img {
        width: 7.5em;
        border-radius: .5em;
    }

    .slider figure section {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
    }

    .slider figure section p {
        font-size: 1em;
        text-align: center;
        color: var(--color-white)
    }

    .slider figure section p:nth-of-type(2) {
        font-size: .5em;
    }


    .barrelStats {
        margin-bottom: 5em;
    }

    .barrelStats section {
        display: flex;
        gap: 1em;
        justify-content: space-between;
        padding: 1em;
        font-size: .7em;
    }

    .barrelStats div {
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border-radius: .5em;
        padding: .5em;
    }

    .barrelStats div img {
        width: 100%;
        padding: .5em;
    }

    .statsInfo {
        font-family: 600;

    }

    .done::after {
        content: '';
        position: absolute;
        background-color: var(--color-green);
        opacity: .75;
        top:0;
        left:0;
        border-radius: .5em;
        width: 7.5em;
        height: calc(100% - 5px);
    }

    .locked::after {
        content: '';
        position: absolute;
        background-color: #000000;
        opacity: .75;
        top:0;
        left:0;
        border-radius: .5em;
        width: 7.5em;
        height: calc(100% - 5px);
    }
    
</style>