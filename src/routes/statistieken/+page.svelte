<script lang="ts">
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/HeaderHome.svelte'
</script>

<Header />

<main class="stats">
    <h2>Statistieken</h2>
    
    <section class="total">
        <p>Totaal opgevangen</p>
        <p>502 Liter</p>
        <p>Het aantal liter dat je hebt opgevangen staat gelijk aan:</p>
        <section class="milestone">
            <div class="slider">
                <figure class="done">
                    <img src="/images/shower.jpg" alt="">
                    <section>
                        <p>250L</p>
                        <p>Half uur douchen</p>
                    </section> 
                </figure>

                <figure>
                    <div class="showMilestone"><i class="fa-solid fa-chevron-down"></i></div>
                    <img src="/images/shower.jpg" alt="">
                    <section>
                        <p>500L</p>
                        <p>Uur douchen</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/milestone.png" alt="">
                    <section>
                        <p>1000L</p>
                        <p>Is 1m2 aan water</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/pool.png" alt="">
                    <section>
                        <p>2000L</p>
                        <p>Klein zwembad</p>
                    </section>
                </figure>

                <figure class="locked">
                    <img src="/images/pool.png" alt="">
                    <section>
                        <p>5000L</p>
                        <p>Groot zwembad</p>
                    </section>
                </figure>
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
        margin-bottom: 5em;
    }

    .stats h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;
    }

    .total {
        background-color: var(--color-grey);
        color: var(--color-blue-dark);
        margin: 0 1em 2em 1em;
        border-radius: .5em;
        box-shadow: var(--shadow);
    }

    .total p {
        margin-bottom: 1em;
    }

    .total > p:nth-of-type(1) {      
        font-family: 100;
        padding: .5em;
        font-size: 1.25em;
    }

    .total > p:nth-of-type(2) {
        padding: .5em;
        text-align: center;
        font-size: 1.5em;
        font-weight: var(--font-weight-semi-bold);
        background-color: var(--color-green);
        color: white;
        border-radius: 1em;
        width: 7em;
        margin: 0 auto 1em auto;
    }

    .total > p:nth-of-type(3) {
        text-align: center;
        padding: 1em 1em 0 1em;
        margin-bottom: 0;
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
        position: relative;
        z-index: 1;
    }

    .slider p:first-of-type {
        background-color: var(--color-blue-dark);
        border-radius: 1em;
        font-size: 1.25em;
        padding: .25em 1em;

    }

    .slider p:last-of-type {
        bottom: 0;
        position: absolute;
        left: 50%;
        width: 80%;
        transform: translateX(-50%);
        padding: .5em;
        z-index: -1;
        background-color: var(--color-blue-light);
        border-radius: 1em;
        font-size: .75em !important;
    }

    .slider figure {
        width: 15em;
        margin: .5em;
        scroll-snap-align: center;
        position: relative;
        
    }

    .slider figure img {
        width: 15em;
        border-radius: .5em;
        object-fit: cover;
        border: 1px solid var(--color-blue-dark)
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
        font-size: 1.5em;
        text-align: center;
        color: var(--color-white)
    }

    .slider figure section p:nth-of-type(2) {
        font-size: 1em;
    }

    .done::after {
        content: '';
        position: absolute;
        background-color: var(--color-green);
        opacity: .75;
        top:0;
        left:0;
        border-radius: .5em;
        width: 15em;
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
        width: 15em;
        height: calc(100% - 5px);
    }

    ::-webkit-scrollbar {
        height: .5em;
    }
    
    ::-webkit-scrollbar-track {
        background: var(--color-grey);
        opacity: .2;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-green);
        border-radius: 2em;
    }
</style>