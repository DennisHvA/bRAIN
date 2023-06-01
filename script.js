const apiUrl = 'https://api.dataplatform.knmi.nl/open-data/v1/datasets/ROYK/radius';
const apiKey = 'eyJvcmciOiI1ZTU1NGUxOTI3NGE5NjAwMDEyYTNlYjEiLCJpZCI6IjI4ZWZlOTZkNDk2ZjQ3ZmE5YjMzNWY5NDU3NWQyMzViIiwiaCI6Im11cm11cjEyOCJ9'; // Vervang dit met je eigen KNMI API-sleutel

// Functie om het fetch-verzoek uit te voeren
async function fetchNeerslagData() {
  const start = '2023-01-01T00:00:00Z'; // Vervang met de gewenste startdatum
  const end = '2023-01-31T23:59:59Z'; // Vervang met de gewenste einddatum
  const lat = 52.0; // Vervang met de gewenste breedtegraad
  const lon = 5.0; // Vervang met de gewenste lengtegraad
  const radius = 10; // Vervang met de gewenste straal in kilometers

  const url = `${apiUrl}?start=${start}&end=${end}&lat=${lat}&lon=${lon}&radius=${radius}&format=json`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Hier kun je de ontvangen gegevens verder verwerken
    } else {
      console.log('Er is een fout opgetreden bij het ophalen van de gegevens.');
    }
  } catch (error) {
    console.log('Er is een fout opgetreden bij het maken van het verzoek:', error);
  }
}

// Roep de functie aan om de neerslaggegevens op te halen
fetchNeerslagData();