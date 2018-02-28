var diskHold = "";
const winArray = [
    [1, 2, 3, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

const gameArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]


var main = document.querySelector("main");


function createDisks() {
    var destination = document.getElementById("rod1");
    for (i = 4; i > 0; i--) {
        let div = document.createElement("div");
        div.id = (String(i));
        div.className = ("disk");
        destination.appendChild(div);
    }
}
createDisks();

function createHandler() {
    var disks = document.getElementsByClassName("disk")
    for (let i = 0; i < disks.length; i++) {
        let disk = disks[i];
        disk.addEventListener('click', selectDisk);
    }
}
createHandler()

// var d1 = document.getElementById("1");
// d1.addEventListener('click', selectDisk);

// var d2 = document.getElementById("2");
// d2.addEventListener('click', selectDisk);

// var d3 = document.getElementById("3");
// d3.addEventListener('click', selectDisk);

// var d4 = document.getElementById("4");
// d4.addEventListener('click', selectDisk);


function selectDisk(event) {
    let thisDisk = event.target;
    let idNum = thisDisk.id;
    diskHold = idNum;
    thisDisk.remove();
    thisDisk.removeEventListener();
}



function placeDisk(event) {
    let thisButton = event.target;
    // console.log(thisButton);
    var newDisk = document.createElement("div");
    newDisk.id = diskHold[0];
    var parent = thisButton.parentElement;
    parent.appendChild(newDisk);
    diskHold = "";
    // let test=document.getElementById("rod2");
    // let wakamashi=test.lastElementChild;
    console.log(main);
    createHandler()
}

// for(i=0;i<gameArray.length; i++){

// }

// Click event for choices.
var columns = document.querySelectorAll("button");

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.addEventListener('click', placeDisk);
}