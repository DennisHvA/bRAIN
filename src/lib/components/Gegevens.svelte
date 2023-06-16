<script>
    import { onMount } from "svelte";
  
    let formData = {};
  
    onMount(() => {
      formData = JSON.parse(localStorage.getItem("formData")) || {};
    });
  </script>
  
  <section class="gegevens">
    <h2>Gegevens</h2>
    <section>
      <section>
        <p>Daktype</p>
        <p>{formData.daktype || "Je data"}</p>
      </section>
      <div></div>
    </section>
    <section>
      <section>
        <p>Aantal vierkante meter</p>
        <p>{formData.size || "Je data"}</p>
      </section>
      <div></div>
    </section>
    <section>
      <section>
        <p>Aantal regenpijpen</p>
        <p>{formData.pipes || "Je data"}</p>
      </section>
      <div></div>
    </section>
    <section>
      <section>
        <p>Aantal liter in de regenton</p>
        <p>{formData.liter || "Je data"}</p>
      </section>
      <div></div>
    </section>
    <section>
      <section>
        <p>Postcode en huisnummer</p>
        <p>{formData.zip + ' ' + formData.huisnummer|| "Je data"}</p>
      </section>
      <div></div>
    </section>
  </section>

<style>
    .gegevens {
        display: flex;
        flex-direction: column;
        gap: 1.5em;}
    
    .gegevens > section {
        box-shadow: var(--shadow);
        background-color: var(--color-grey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    
    .gegevens> section > div{
        width: 1em;
        aspect-ratio: 1/1;
        border-top: var(--color-green) solid 3px;
        border-right: var(--color-green) solid 3px;
        rotate: 45deg;
    }
    
    .gegevens > section > section:first-of-type > p:first-of-type {
        font-weight: var(--font-weight-semi-bold);
    }

    .gegevens h2 {
        font-size: 1.5em;
    }
</style>