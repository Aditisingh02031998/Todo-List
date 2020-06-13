function newItem() {
    let item = document.getElementById("name").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = removeItem;
    li.appendChild(span);
    ul.appendChild(li);
    document.getElementById("name").value = "";

}

document.body.onkeyup = function (test) {
    if (test.keyCode === 13)
        newItem();

};

function removeItem(event) {
    event.target.parentElement.remove();
}

