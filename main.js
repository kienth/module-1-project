//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings

// export var newsList = [
//     "1",
//     "2",
//     "3",
//     "11",
//     "22",
//     "33",
//     "111",
//     "222",
//     "333",
//     "1111",
//     "2222",
//     "3333",
//     "11111",
//     "22222",
//     "33333",
//     "111111",
//     "222222",
//     "333333",
// ];

//have kind of issue where after i search then click sorting bottons, some news display not moving. But when i used my example list, it works.

export var newsList = [
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
    //inputValue is the variable that contains the search string

    // const inputValue = "art";  // unit testing

    const inputValue = document.getElementById("search-input").value;

    let searchInput = newsList.filter((newsList) =>
        newsList.includes(inputValue)
    );

    return searchInput;
}

export function sort(type) {
    let searchInput = search();

    if (type == "ascending") {
        searchInput.sort();
        //Write your code here for sorting (ascending)
    } else {
        searchInput.reverse();
        //Write your code here for sorting (descending)
    }
    return searchInput;
}
