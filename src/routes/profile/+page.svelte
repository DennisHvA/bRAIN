<script>
    import Header from '$lib/components/Header.svelte'
    import Gegevens from '$lib/components/Gegevens.svelte'
    import Nav from '$lib/components/Nav.svelte'

</script>

<Header />

<main class="profile">

    <Gegevens/>

    <Nav />
    
</main>

<style>
    .profile {
        padding: 0;
    }
</style>