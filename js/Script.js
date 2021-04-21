var AllCount;

window.onload = function Create() {
    var main = document.getElementById("main3");
    var count = "";
    var name = "Omid";
    AllCount = name.length * 2;
    for (i = 0; i < name.length * 2; i++) {
        count += "<article></article>";
    }
    main.innerHTML = count;
    management();
}

function management() {
    Setsize();
    SetcolorandStar();
    CustomFirst();
    ClickOther();
}

function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

function Setsize() {
    var name = "Omid";
    var Rec = "";
    for (i = 0; i < name.length * 2; i++) {
        Rec = document.getElementsByTagName("ARTICLE")[i];
        Rec.style.width = '333px';
        Rec.style.height = '348px';
        Rec.style.position = "relative" ; 
    }
}

function SetcolorandStar() {
    var name = "Omid";
    var Rec = "";
    for (i = 0; i < name.length * 2; i++) {
        Rec = document.getElementsByTagName("ARTICLE")[i];
        Rec.style.backgroundColor = get_rand_color();
        if (i % 3 == 2) {
            MakeStar(Rec);
        }
    }
}

function MakeStar(Rec) {
    Rec.img = document.createElement("img");
    Rec.img.className = "Star" ; 
    Rec.img.src = 'images/Star.png';
    Rec.img.setAttribute("height", "60");
    Rec.img.setAttribute("width", "60");
    Rec.img.style.position = "absolute";
    Rec.appendChild(Rec.img);
}


function CustomFirst() {
    var Rec = "";
    Rec = document.getElementsByTagName("ARTICLE")[0];
    var img = document.createElement("img");
    img.src = 'images/Plus.png';
    img.setAttribute("height", "86");
    img.setAttribute("width", "86");
    img.style.marginTop = "125px";
    img.style.marginLeft = "120px";
    PlusClick(img);
    Rec.appendChild(img);
}

function PlusClick(img) {
    img.onclick = function () {
        AllCount = AllCount + 1;
        var main = document.getElementById("main3");
        var Nrec = document.createElement("article");
        Nrec.style.width = '333px';
        Nrec.style.height = '348px';
        Nrec.style.backgroundColor = get_rand_color();
        Nrec.style.position = "relative" ; 
        var Color = Nrec.style.backgroundColor;
        Click(Nrec, Color);
        if (AllCount % 3 == 0) {
            MakeStar(Nrec);
        }
        main.appendChild(Nrec);
    }
}


function ClickOther() {
    var name = "Omid";
    var Rec = "";
    for (i = 1; i < name.length * 2; i++) {
        Rec = document.getElementsByTagName("ARTICLE")[i];
        var OldColor = Rec.style.backgroundColor;
        Click(Rec , OldColor);
    }
}

function Click(Rec , Color) {
    var img = document.createElement("img");
    img.src = 'images/PowerLift.png';
    img.setAttribute("height", "348");
    img.setAttribute("width", "333");
    Rec.onclick = function () {
        if (Rec.style.backgroundColor == "white") {
            Rec.style.backgroundColor = Color;
            img.parentNode.removeChild(img);
        }
        else{
            Rec.style.backgroundColor = "white";
            Rec.appendChild(img);
        }
    }
}



