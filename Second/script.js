let body = document.getElementsByTagName("body")[0];
document.getElementsByTagName('button')[0].addEventListener("click",
    fun => {
        let flag = true;
        word = body.getElementsByTagName("input")[0].value;
        size = word.length;
        for (let i = 0; i < size; i++) {
            if (word[i] !== word[size - i - 1]) {
                flag = false;
                break;
            }
        }
        let ans = document.createElement('div');
        if (flag === true) {
            ans.innerHTML = `<span style = "color: green;font-size:20px;margin: 20px 100px;"> Word is Palindrome </span>`
        }
        else {
            ans.innerHTML = `<span style = "color: red;font-size:20px;margin: 10px 100px;"> Word is Not Palindrome </span>`
        }
        body.appendChild(ans);
    
    }
);