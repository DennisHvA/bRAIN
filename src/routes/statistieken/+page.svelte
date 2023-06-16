<script lang="ts">
    import Nav from '$lib/components/Nav.svelte'
    import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main class="stats">
    <h2>Statistieken</h2>
    
    <section>
        <div class="total">
            <p>Totaal opgevangen</p>
            <p>503 liter</p>
        </div>

        <section class="stat-block">
            <div>
                <p>Totaal regeonton geleegd</p>
                <p>7x</p>
            </div>

            <div>
                <p>Totaal regenval</p>
                <p>800l</p>
            </div>
        </section>
        
        <section class="stat-block">
            <div>
                <p>Eerst volgende regenval</p>
                <p>23 juni</p>
            </div>

            <div>
                <p>Verwachte vol datum</p>
                <p>28 juni</p>
            </div>
        </section>
        
    </section>

    <Nav />

</main>

<style>
    .stats {
        background-color: var(--color-grey);
        border-radius: 2em 2em 0 0;
    }

    .stats h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;
    }

    .total {
        background-color: var(--color-green);
        color: var(--color-white);
        margin: 0 1em;
        border-radius: .5em;
    }

    div p:nth-of-type(1) {      
        font-family: 100;
        padding: .5em;
        font-size: .55em;
    }

    div p:nth-of-type(2) {
        padding: .5em;
        text-align: center;
        font-size: 2em;
    }

    .stat-block {
        display: flex;
        justify-content: space-between;
        margin: 1em;
        color: var(--color-white);
        gap: 1em;
    }

    .stat-block div {
        background-color: var(--color-blue-dark);
        border-radius: .5em;
        width: 45%;
    }
</style>