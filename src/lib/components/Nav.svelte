<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const mainElement = document.querySelector("main");
      const navElement1 = document.querySelector("nav ul li:nth-of-type(1)")
      const navElement2 = document.querySelector("nav ul li:nth-of-type(2)")
      const navElement3 = document.querySelector("nav ul li:nth-of-type(3)")
  
      if (mainElement.classList.contains("landing")) {
        navElement1?.classList.add("active")
      }
  
      if (mainElement.classList.contains("stats")) {
        navElement2?.classList.add("active")
      }
  
      if (mainElement.classList.contains("profile")) {
        navElement3?.classList.add("active")
      }   
    });
</script>  

<nav>
    <ul>
        <li>
            <a href="/home">
                <img src="icons/home.svg" alt="">
                <p>Home</p>
            </a>
        </li>
        <li>
            <a href="/statistieken">
                <img src="icons/stats.svg" alt="">
                <p>Statistieken</p>
            </a>
        </li>
        <li>
            <a href="/profile">
                <img src="icons/profile.svg" alt="">
                <p>Profiel</p>
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
        z-index: 10;
    }

    nav ul {
        display: flex;
        justify-content: space-between;
    }

    nav ul li {
        opacity: .5;
    }

    nav ul li a {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0;
        padding: 0.5em 0.5em;
        background-color: var(--color-grey);
        color: var(--color-blue-dark);
    }

    nav ul li img {
        width: 1.5em;
        aspect-ratio: 1/1;
    }

    nav ul li p {
        font-size: .75em;
    }

    :global(.active) {
        opacity: 1 !important;
    }
</style>