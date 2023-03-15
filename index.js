// fetch and update API resource
async function updateRandomColorAPI() {
  // to generate random number to update the resource
  let numGenerated = Math.floor(Math.random() * 10000);
  const response = await fetch(
    `https://www.colr.org/json/schemes/random/7?scheme_size_limit=%3E5/${numGenerated}`
  );
  const data = await response.json();

  return data;
}

var colors = [];

// main button function
const generate = () => {
  updateRandomColorAPI()
    .then((data) => {
      // to get the hex codes
      colors = data["schemes"][0]["colors"];
      generateColours(colors);
    })
    .catch((error) => console.log(error.message));
};

// to generate and assign colours to sample card section
function generateColours(colors) {
  var colorsPalette = document.getElementById("colors-palette").children;
  for (let i = 0; i < 5; i++) {
    var color = colorsPalette.item(i);
    var colorHex = "#" + colors[i];

    // to colour the whole palette
    color.style.backgroundColor = colorHex;

    switch (i) {
      // for site background
      case 0:
        const sampleSite = document.getElementById("sample-website");
        sampleSite.style.backgroundColor = colorHex;
        break;
      // for card section background
      case 1:
        const cardSection = document.getElementsByClassName("card-section")[0];
        cardSection.style.backgroundColor = colorHex;
        break;
      // for button background
      case 2:
        const btnCard = document.getElementsByClassName("btn-card")[0];
        btnCard.style.backgroundColor = colorHex;
        break;
      // for card title
      case 3:
        const titleCard = document.getElementsByTagName("h1")[1];
        titleCard.style.color = colorHex;
        break;
      // for card text content
      case 4:
        const paraCard = document.getElementsByTagName("p")[0];
        paraCard.style.color = colorHex;
        break;
    }
  }
}
