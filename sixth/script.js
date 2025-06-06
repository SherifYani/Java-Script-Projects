
function Change() {
    let d = document.getElementsByTagName('input')[0];
    let x = document.getElementsByTagName('button')[0];
    if (d.type === 'password') {
        x.innerText = 'Hide';
        d.type = 'text';
    }
    else {
        x.innerText = 'Show';
        d.type = 'password';
    }
}