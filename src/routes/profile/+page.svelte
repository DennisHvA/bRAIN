<script>
    import Header from '../../$lib/components/Header.svelte'
    import Gegevens from '../../$lib/components/Gegevens.svelte'
    import Nav from '../../$lib/components/Nav.svelte'

    // const roofExpand = document.querySelector('.house');

    // roofExpand

</script>

<Header />

<main class="profile">

    <h2>Profiel</h2>

    <section class="general-info">
        <div class="profile-infoblock">
            <div>
                <p>Email</p>
                <p>b-rain@spatwater.nl</p>
            </div>  
        </div>

        <div class="profile-infoblock">
            <div>
                <p>Locatie</p>
                <p>Amsterdam</p>
            </div>   
        </div> 
    </section>

    <section class="roofs">
        <section class="house">
            <img src="images/houseprofile.png" alt="">
            <section>
                <p>Huis dak 1</p>
            </section>
            <section class="detail-info">

                <div class="barrel-infoblock">
                    <div>
                        <p>Regenton 1</p>
                        <img src="images/regenton.png" alt="regenton">
                    </div>
                    <button>
                        +
                    </button>
                </div>

                <div class="profile-infoblock">
                    <div>
                        <p>Dak oppervalkte</p>
                        <p>200m2</p>
                    </div>  
                </div>

                <div class="profile-infoblock">
                    <div>
                        <p>Regenpijpen</p>
                        <p>5</p>
                    </div>  
                </div>
            </section>
        </section> 

        <section class="house">
            <img src="images/houseprofile.png" alt="">
            <section>
                <p>Blok hut dak</p>
            </section>
        </section> 
    </section>
    

    <Nav />
    
</main>

<style>

    .profile {
        background-color: var(--color-white);
        border-radius: 2em 2em 0 0;
        height: 100%;
    }

    .profile h2 {
        color: var(--color-blue-light);
        font-size: 1.25em;
        padding: 1em;
    }
    
    .profile > section {
        padding: 1em;
    }

    .general-info {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .profile-infoblock {
        box-shadow: var(--shadow);
        background-color: var(--color-grey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    .profile-infoblock p:first-of-type {
        font-weight: var(--font-weight-semi-bold);
    }

    .roofs {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-bottom: 5em;
    }

    .roofs .house {
        border-radius: .5em;
        border: 2px solid var(--color-blue-light);
        font-weight: var(--font-weight-semi-bold);
        box-shadow: var(--shadow);
    }

    .roofs .house img {
        width: 100%;
    }

    .roofs .house section > p {
        background-color: var(--color-blue-light);
        padding: .5em 1em;
        color: var(--color-white);
    }

    .detail-info {
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .barrel-infoblock {
        display: flex;
        gap: 1.5em;
        color: var(--color-blue-dark);
        border-radius: .5em;
        align-items: center;
    }

    .barrel-infoblock div {
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border-radius: .5em;
        padding: .5em;
        width: 7.5em;
    }

    .barrel-infoblock div img {
        width: 100%;
        padding: .5em;
    }

    .barrel-infoblock button {
        height: 50%;
        border-radius: 50%;

    }
    
</style>