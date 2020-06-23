function newItem() {
    let item = document.getElementById("name").value;
    let ul = document.getElementById("list");
    let selectAll = document.getElementById("parent");
    let checkboxes = document.createElement("input");
    checkboxes.setAttribute("type", "checkbox");
    checkboxes.className = "Selected";
    console.log(checkboxes);
    console.log(selectAll);
    console.log(selectAll.checked);
    let li = document.createElement("li");
    li.className="Next";
    li.appendChild(document.createTextNode(item));
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = removeItem;
    li.appendChild(checkboxes);
    selectAll.onclick=Selects;
    li.appendChild(span);
    ul.appendChild(li);
    document.getElementById("name").value = "";
    let Count = document.getElementsByTagName("li").length;
    console.log(Count + "Items");
    document.getElementById("divi").innerHTML = Count + "items";

}

document.body.onkeyup = function (test) {
        if (test.keyCode === 13)
        newItem() };

function removeItem(event) {
    event.target.parentElement.remove();
}
function Selects(event) {
    let checkboxes = document.getElementsByClassName("Selected");
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].checked = event.target.checked;

        }
}
