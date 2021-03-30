
function createTable(){
let dialogBody = document.getElementById("dialogBody");
dialogBody.innerHTML = "";
var dialogWindow = document.getElementById("dialogWindow");

document.getElementById("yHelp").innerHTML = "";

var rows = document.getElementById("x").value;
var cols = document.getElementById("y").value;
if(rows > 9 || rows < 1 || cols > 9 || cols < 1 ){
    alert("Neplatna hodnota su platne len hodnoty 1-9");
    document.getElementById("yHelp").innerHTML = "Neplatna hodnota,hodnoty musia byt v rozmedzi 1-9";
    return;
}
else{
    dialogWindow.style.display = 'flex';
    let table = document.createElement('table');
    table.classList.add("table");
    let tableHeader = document.createElement('thead');
    tableHeader.classList.add("table-dark")
    let tableBody = document.createElement('tbody');
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    let tr = document.createElement('tr');

    for(let i = 0; i <= cols; i++){
        let tr = document.createElement("tr");
        tr.classList.add("table-active");
        let actualRow = tableBody.appendChild(tr);
        if(i == 0){
            tableHeader.appendChild(tr);
        }
        else{
            tableBody.appendChild(tr);
        }
        for(let j = 0; j <= rows; j++){
            let text;
            if(i == 0){
                if(j == 0){
                    text = document.createTextNode(`#`);
                }
                else{
                    text = document.createTextNode(`X = ${j}`);
                }
            }
            else{
                if(j== 0){
                    text = document.createTextNode(`Y = ${i}`);
                }
                else{
                text = document.createTextNode(`${i * j}`);
                }
            }
            let td = document.createElement("td");
            td.appendChild(text);
            actualRow.appendChild(td);
        }
    }
    dialogBody.appendChild(table);
    }
}
function closeModel(){
    document.getElementById("dialogWindow").style.display = 'none';

}


