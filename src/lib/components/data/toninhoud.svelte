<script>

</script>

<section>
    <section>
      <p>Aantal liter in de regenton</p>
      <p>{gegevens.inhoudRegenton}</p>
    </section>
    <div></div>
</section>

<style>
    section {
        box-shadow: var(--shadow);
        background-color: var(--color-grey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    
    section > div{
        width: 1em;
        aspect-ratio: 1/1;
        border-top: var(--color-green) solid 3px;
        border-right: var(--color-green) solid 3px;
        rotate: 45deg;
    }
    
    section > section:first-of-type > p:first-of-type {
        font-weight: var(--font-weight-semi-bold);
    }
</style>