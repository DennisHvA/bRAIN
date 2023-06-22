<script>
    import Header from '$lib/components/Header.svelte'
    import Gegevens from '$lib/components/Gegevens.svelte'
</script>

<Header />

<main class="check">

    <Gegevens />
    
    <a href="/home">Opslaan</a>

</main>

<style>
    .check {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
</style>