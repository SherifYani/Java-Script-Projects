let body = document.getElementsByTagName("body")[0];

let quote = document.getElementById("quote");
let quotes = [
    "quote 1",
    "quote 1",
    "quote 2",
    "quote 3",
    "quote 4",
    "quote 5",
    "quote 6",
    "quote 7",
    "quote 8",
    "quote 9",
    "quote 10",
    "quote 11",
    "quote 12",
    "quote 13",
    "quote 14",
    "quote 15",
    "quote 16",
    "quote 17",
    "quote 18",
    "quote 19",
    "quote 20"
]
let Used = -1;
document.getElementsByTagName('button')[0].addEventListener("click", fun => {
    quote.innerHTML = "";
    let num;
    do {
        num = Math.floor(Math.random() * quotes.length);
    } while (num === Used)
    let para = document.createElement("p");
    para.innerText = quotes[num];
    quote.appendChild(para);
    Used = num;
});