const superheroes = [
  {
  "name": "Batman",
  "publisher": "DC Comics",
  "alter_ego": "Bruce Wayne",
  "first_appearance": "Detective Comics #27",
  "weight": "210"
  },
  {
  "name": "Superman",
  "publisher": "DC Comics",
  "alter_ego": "Kal-El",
  "first_appearance": "Action Comics #1",
  "weight": "220"
  },
  {
  "name": "Flash",
  "publisher": "DC Comics",
  "alter_ego": "Jay Garrick",
  "first_appearance": "Flash Comics #1",
  "weight": "195"
  },
  {
  "name": "Green Lantern",
  "publisher": "DC Comics",
  "alter_ego": "Alan Scott",
  "first_appearance": "All-American Comics #16",
  "weight": "186"
  },
  {
  "name": "Green Arrow",
  "publisher": "DC Comics",
  "alter_ego": "Oliver Queen",
  "first_appearance": "All-American Comics #16",
  "weight": "195"
  },
  {
  "name": "Wonder Woman",
  "publisher": "DC Comics",
  "alter_ego": "Princess Diana",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "165"
  },
  {
  "name": "Blue Beetle",
  "publisher": "DC Comics",
  "alter_ego": "Dan Garret",
  "first_appearance": "Mystery Men Comics #1",
  "weight": "145"
  },
  {
  "name": "Spider Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Peter Parker",
  "first_appearance": "Amazing Fantasy #15",
  "weight": "167"
  },
  {
  "name": "Captain America",
  "publisher": "Marvel Comics",
  "alter_ego": "Steve Rogers",
  "first_appearance": "Captain America Comics #1",
  "weight": "220"
  },
  {
  "name": "Iron Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Tony Stark",
  "first_appearance": "Tales of Suspense #39",
  "weight": "250"
  },
  {
  "name": "Thor",
  "publisher": "Marvel Comics",
  "alter_ego": "Thor Odinson",
  "first_appearance": "Journey into Myster #83",
  "weight": "200"
  },
  {
  "name": "Hulk",
  "publisher": "Marvel Comics",
  "alter_ego": "Bruce Banner",
  "first_appearance": "The Incredible Hulk #1",
  "weight": "1400"
  },
  {
  "name": "Wolverine",
  "publisher": "Marvel Comics",
  "alter_ego": "James Howlett",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "200"
  },
  {
  "name": "Daredevil",
  "publisher": "Marvel Comics",
  "alter_ego": "Matthew Michael Murdock",
  "first_appearance": "Daredevil #1",
  "weight": "200"
  },
  {
  "name": "Silver Surfer",
  "publisher": "Marvel Comics",
  "alter_ego": "Norrin Radd",
  "first_appearance": "The Fantastic Four #48",
  "weight": "unknown"
  }
  ]


// Opdracht : de "Superpowers"  van .map .filter .reduce
//  1

// superheroes.map((item) =>{
//   console.log(item.name);
// })

//  2

// const lightWeightSuperheroes = person => person.weight < 200;

// const weightIsLessThenTwoHundred = superheroes.filter(lightWeightSuperheroes);

// console.log(weightIsLessThenTwoHundred);
// 3

// const twoHunderdPoundSuperheroes = superheroes.filter((item) =>{
//   const weightItem = item.weight === '200';
//   return weightItem;
// })
// const twoHunderdPoundSuperheroes1 = twoHunderdPoundSuperheroes.map(person => person.name);

// console.log(twoHunderdPoundSuperheroes1);

// 4

// const firstAppearance = superheroes.filter((item) => {
//   return item.publisher;
// })
// // const nameS = superheroes.filter((item) => {
// //   return item.name;
// // })

// const firstAppearance2 = firstAppearance.map(person => person.publisher);
// // const firstAppearance3 = firstAppearance.map(person => person.name);

// // const nameAndPublisher = (firstAppearance3 + firstAppearance2);



// console.log(firstAppearance2);

// 5

// const DCComics = person => person.publisher === "DC Comics";

// const magazine = superheroes.filter(DCComics);

// superheroesOfDCComics = magazine.map(person => person.name);

// console.log("DC comics superhelden", superheroesOfDCComics);


// const marvelComics = person => person.publisher === "Marvel Comics";

// const magazine2 = superheroes.filter(marvelComics);

// superheroesOfMarvel = magazine2.map(person => person.name);

// console.log("Marvel superhelden", superheroesOfMarvel);

// 6

const DCComics = person => person.publisher === "DC Comics";

const magazine = superheroes.filter(DCComics);

const totalWeight = magazine.reduce((currentTotal, item) =>{
  return item.weight + currentTotal
}, "0")

console.log(totalWeight);

const marvelComics = person => person.publisher === "Marvel Comics";

const magazine2 = superheroes.filter(marvelComics);

const totalWeight2 = magazine2.reduce((currentTotal, item) =>{
  return item.weight + currentTotal
}, "0")

console.log(totalWeight2);