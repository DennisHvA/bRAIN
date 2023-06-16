<script>
    
</script>

<nav>
    <ul>
        <li>
            <a href="/home">
                <img src="icons/home.svg" alt="">
            </a>
        </li>
        <li>
            <a href="/statistieken">
                <img src="icons/stats.svg" alt="">
            </a>
        </li>
        <li>
            <a href="/profile">
                <img src="icons/profile.svg" alt="">
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        background-color: var(--color-grey);
        box-shadow: 0 -4px 6px rgba(174, 190, 205, .3);;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 0 1em;
    }

    nav ul {
        display: flex;
        justify-content: space-between;
    }

    nav ul li a {
        width: 100%;
        display: block;
        border-radius: 0;
        background-color: var(--color-grey);
        color: var(--color-blue-dark);
    }

    nav ul li img {
        width: 2em;
        aspect-ratio: 1/1;
    }
</style>