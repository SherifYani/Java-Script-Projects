let body = document.getElementsByTagName("body")[0];

const btns = document.getElementsByTagName("button");
btns[0].addEventListener("click", fun => {
    body.style.backgroundColor = "green";
});
btns[1].addEventListener("click", fun => {
    body.style.backgroundColor = "red";
});
btns[2].addEventListener("click", fun => {
    body.style.backgroundColor = "blue";
});
btns[3].addEventListener("click", fun => {
    let first = Math.round(Math.random() * 255);
    let second = Math.round(Math.random() * 255);
    let third = Math.round(Math.random() * 255);
    let color = `rgb(${first}, ${second}, ${third})`;
    body.style.backgroundColor = color;
});