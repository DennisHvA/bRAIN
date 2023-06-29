<script lang="ts">
</script>

<header>
    <section class="header-top">
        <h1>B-rain</h1>
    </section> 
    <section class="notifications">
        <h2>Notificaties</h2>
       <div>
            <figure>
                <p>!</p>
            </figure>
            <div class="notification-info">
                <p>25 juni</p>
                <p>Je regenton is bijna vol</p>
            </div>
       </div>
       
       <div>
            <figure>
                <p>!</p>
            </figure>
            <div class="notification-info">
                <p>1 juni</p>
                <p>Je regenton is bijna vol</p>
            </div>
        </div> 
    </section>  
</header>

<style>
header {
    margin: 0 auto;
    position: relative;
}

.header-top {
    padding: .5em;
    position: relative;
}

.header-top h1 {
    text-align: center;
    font-size: 2em;
}

.header-top i {
    position: absolute;
    right: 1em;
    top: 50%;
    font-size: 1.25em;
    transform: translatey(-50%);
    cursor: pointer;
}

.notifications {
    background-color: var(--color-grey);
    position: absolute;
    z-index: 2;
    right: 0;
    padding: 1em 2em;
    box-shadow: var(--shadow);
    display: none;
    flex-direction: column;
    gap: 1em;
}

.notifications figure {
    width: 2em;
    height: 2em;
    background-color: var(--color-green);
    border-radius: 50%;
    display:grid;
    place-content: center;
    color: var(--color-white);
}

.notifications > div {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 1em;
}

.notification-info p:first-of-type{
    font-weight: 100;
}
</style>