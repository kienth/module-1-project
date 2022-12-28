import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
    const inputValue = [
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
    ];
    expect(search()).toEqual(expect.arrayContaining(inputValue));
});

test("Sort function testing", () => {
    const sortValue = [
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        "Decoder: Mining asteroids for minerals can help spare Earth",
    ];
    expect(sort("ascending")).toEqual(expect.arrayContaining(sortValue));
});
