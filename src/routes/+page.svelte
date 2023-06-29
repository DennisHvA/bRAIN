<main>
    <h1>b-RAIN</h1>
    <h2>We helpen met het opvangen van regenwater!</h2>
    <p>Voordat we beginnen hebben we een aantal gegevens nodig</p>
    <a href="/onboarding">Start</a>
    <section>
        <img src="images/landing1.png" alt="berg">
        <img src="images/landing2.png" alt="berg">
        <img src="images/landing3.png" alt="berg">
        <img src="images/landing4.png" alt="berg">
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: 100vh;
        align-items: center;

    }

    h1 {
        padding-top:2em;
    }

    h2 {
        font-weight: var(--font-weight-medium);
        text-align: center;
    }

    p {
        font-size: 1.2em;
        text-align: center;
    }

    a {
        width: fit-content;
    }

    section {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    section img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>