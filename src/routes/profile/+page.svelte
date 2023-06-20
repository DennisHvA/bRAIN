<script>
    import Header from '$lib/components/Header.svelte'
    import Gegevens from '$lib/components/Gegevens.svelte'
    import Nav from '$lib/components/Nav.svelte'

</script>

<Header />

<main class="profile">

    <h2>Profiel</h2>

    <section class="profile-regenton">
        <div>
            <p>Regenton 1</p>
            <img src="images/regenton.png" alt="regenton">
        </div>
        <div>
            <p>Regenton 1</p>
            <img src="images/regenton.png" alt="regenton">
        </div>
        <div>
            <p>Regenton 1</p>
            <img src="images/regenton.png" alt="regenton">
        </div>
    </section>

    <section class="profile-gegevens">
        <Gegevens/>
    </section>
    

    <Nav />
    
</main>

<style>

    .profile {
        background-color: var(--color-grey);
        border-radius: 2em 2em 0 0;
        padding: 0;
    }

    .profile h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;;
    }
    
    .profile > section {
        padding: 1em;
    }

    .profile-regenton {
        display: flex;
        justify-content: space-between;
        gap: .5em;
    }

    .profile-regenton div {
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border-radius: .5em;
        padding: .5em;
    }

    .profile-regenton div img {
        width: 100%;
        padding: .5em;
    }
</style>