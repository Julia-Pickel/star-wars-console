console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  // to log the entire data:
  await console.log(data);
  // to count the number of characters / JS objects of the fetched data
  const characterCount = data.results;
  await console.log("Number of characters: ", characterCount);
  // all names of characters:
  await console.log(
    data.results.forEach((character) => {
      console.log(character.name);
    })
  );
  //Bonus: eye color of R2-D2:
  await console.log(
    "Eye color of R2D2: ",
    data.results.find((character) => character.name === "R2-D2").eye_color
  );
}

await fetchData();
