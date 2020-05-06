//Slides the filter bar in and out
var showMenu = false;

$(document).ready(function () {

    var menuAnimationSlideIn = {
        "left": "0px",
        "easing": "swing"
    };
    var menuAnimationSlideOut = {
        "left": "-400px",
        "easing": "swing"
    };

    // when user clicks on the menu
    $("#menu-icon").click(function (event) {
        console.log("Event target: " + event.target);
        if (!showMenu) {
            showMenu = true;
            $("#menu").animate(menuAnimationSlideIn, 300);

        } else {
            showMenu = false;
            $("#menu").animate(menuAnimationSlideOut, 500);
        }
    });

//When a certain category button is clicked, most are hidden and some show 
    $("#menu").on("click", "input", function (event) {
        console.log(event, this.id)

        switch (this.id) {
            case "c1":
                $("#testbox1").hide();
                $("#testbox2").hide();
                $("#testbox3").hide();
                $("#testbox4").hide();
                $("#testbox5").hide();
                $("#testbox6").hide();
                $("#testbox7").hide();
                $("#testbox8").hide();
                $("#testbox9").hide();
                $("#testbox11").hide();
                $("#testbox13").hide();
                $("#testbox15").hide();
                $("#testbox10").show();
                $("#testbox12").show();
                $("#testbox14").show();
                $("#testbox16").show();
                break;
            case "c2":
                $("#testbox2").hide();
                $("#testbox3").hide();
                $("#testbox5").hide();
                $("#testbox8").hide();
                $("#testbox9").hide();
                $("#testbox10").hide();
                $("#testbox11").hide();
                $("#testbox12").hide();
                $("#testbox13").hide();
                $("#testbox14").hide();
                $("#testbox15").hide();
                $("#testbox16").hide()
                $("#testbox1").show()
                $("#testbox4").show()
                $("#testbox6").show()
                $("#testbox7").show()
                break;
            case "c3":
                $("#testbox1").hide();
                $("#testbox2").hide();
                $("#testbox3").hide();
                $("#testbox4").hide();
                $("#testbox5").hide();
                $("#testbox6").hide();
                $("#testbox7").hide();
                $("#testbox8").hide();
                $("#testbox10").hide();
                $("#testbox12").hide();
                $("#testbox14").hide();
                $("#testbox16").hide();
                $("#testbox9").show();
                $("#testbox11").show();
                $("#testbox13").show();
                $("#testbox15").show();
                break;
            case "c4":
                $("#testbox1").hide();
                $("#testbox4").hide();
                $("#testbox6").hide();
                $("#testbox7").hide();
                $("#testbox9").hide();
                $("#testbox10").hide();
                $("#testbox11").hide();
                $("#testbox12").hide();
                $("#testbox13").hide();
                $("#testbox14").hide();
                $("#testbox15").hide();
                $("#testbox16").hide();
                $("#testbox2").show();
                $("#testbox3").show();
                $("#testbox5").show();
                $("#testbox8").show();
                break;
            case "c5":
                $("#testbox1").show();
                $("#testbox2").show();
                $("#testbox3").show();
                $("#testbox4").show();
                $("#testbox5").show();
                $("#testbox6").show();
                $("#testbox7").show();
                $("#testbox8").show();
                $("#testbox9").show();
                $("#testbox10").show();
                $("#testbox12").show();
                $("#testbox13").show();
                $("#testbox14").show();
                $("#testbox15").show();
                $("#testbox16").show();
                break;
        }



    });




});

//Keeps track of which panel is open and which ones should be closed
var open1 = 0;
var open2 = 0;
var open3 = 0;
var open4 = 0;
var open5 = 0;
var open6 = 0;
var open7 = 0;
var open8 = 0;
var open9 = 0;
var open10 = 0;
var open11 = 0;
var open12 = 0;
var open13 = 0;
var open14 = 0;
var open15 = 0;
var open16 = 0;
//      , open2, open3, open4, open5, open6, open7, open8, open9, open10, open11, open12, open13, open14, open15, open16 = 0;

$(document).ready(function () {
    $("#testbox1").click(function () {
        if (open1 == 0) {
            open1 = 1;
        } else if (open1 == 1) {
            open1 = 0;
        }
        $("#panel1").slideToggle("slow");
    });

    $("#testbox2").click(function () {
        if (open2 == 0) {
            open2 = 1;
        } else if (open2 == 1) {
            open2 = 0;
        }
        $("#panel2").slideToggle("slow");
    });

    $("#testbox3").click(function () {
        if (open3 == 0) {
            open3 = 1;
        } else if (open3 == 1) {
            open3 = 0;
        }
        $("#panel3").slideToggle("slow");
    });

    $("#testbox4").click(function () {
        if (open4 == 0) {
            open4 = 1;
        } else if (open4 == 1) {
            open4 = 0;
        }
        $("#panel4").slideToggle("slow");
    });

    $("#testbox5").click(function () {
        if (open5 == 0) {
            open5 = 1;
        } else if (open5 == 1) {
            open5 = 0;
        }
        $("#panel5").slideToggle("slow");
    });

    $("#testbox6").click(function () {
        if (open6 == 0) {
            open6 = 1;
        } else if (open6 == 1) {
            open6 = 0;
        }
        $("#panel6").slideToggle("slow");
    });

    $("#testbox7").click(function () {
        if (open7 == 0) {
            open7 = 1;
        } else if (open7 == 1) {
            open7 = 0;
        }
        $("#panel7").slideToggle("slow");
    });

    $("#testbox8").click(function () {
        if (open8 == 0) {
            open8 = 1;
        } else if (open8 == 1) {
            open8 = 0;
        }
        $("#panel8").slideToggle("slow");
    });

    $("#testbox9").click(function () {
        if (open9 == 0) {
            open9 = 1;
        } else if (open9 == 1) {
            open9 = 0;
        }
        $("#panel9").slideToggle("slow");
    });

    $("#testbox10").click(function () {
        if (open10 == 0) {
            open10 = 1;
        } else if (open10 == 1) {
            open10 = 0;
        }
        $("#panel10").slideToggle("slow");
    });

    $("#testbox11").click(function () {
        if (open11 == 0) {
            open11 = 1;
        } else if (open11 == 1) {
            open11 = 0;
        }
        $("#panel11").slideToggle("slow");
    });

    $("#testbox12").click(function () {
        if (open12 == 0) {
            open12 = 1;
        } else if (open12 == 1) {
            open12 = 0;
        }
        $("#panel12").slideToggle("slow");
    });

    $("#testbox13").click(function () {
        if (open13 == 0) {
            open13 = 1;
        } else if (open13 == 1) {
            open13 = 0;
        }
        $("#panel13").slideToggle("slow");
    });

    $("#testbox14").click(function () {
        if (open14 == 0) {
            open14 = 1;
        } else if (open14 == 1) {
            open14 = 0;
        }
        $("#panel14").slideToggle("slow");
    });

    $("#testbox15").click(function () {
        if (open15 == 0) {
            open15 = 1;
        } else if (open15 == 1) {
            open15 = 0;
        }
        $("#panel15").slideToggle("slow");
    });

    $("#testbox16").click(function () {
        if (open16 == 0) {
            open16 = 1;
        } else if (open16 == 1) {
            open16 = 0;
        }
        $("#panel16").slideToggle("slow");
    });
});






//to get the reciepes in the recipes collection 
function toRecipe() {
    console.log("toRecipe called");
    var n = localStorage.getItem("number");
    console.log(n);
    var recipeToAdd;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('recipes').doc('r' + n).get().then(function (snap) {
            console.log(snap.data()['name']);
            var testVar = snap.data();
            recipeToAdd = snap.data()['name'];
        });
    });

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({



            "recents": firebase.firestore.FieldValue.arrayUnion("r" + n)
            //         "total": 0,
        });
    });
}


//display first recipe box
function display1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r94').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel1").html(info[0]);

            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display second recipe box
function display2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r93').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel2").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display third recipe box
function display3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r92').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel3").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display fourth recipe box
function display4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r95').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel4").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display fifth recipe box
function display5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r91').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel5").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display sixth recipe box
function display6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r96').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel6").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display seventh recipe box
function display7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r97').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel7").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display eighth recipe box
function display8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r9').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel8").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display nineth recipe box
function display9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r1').onSnapshot(function (snap) {

            console.log(snap.data());


            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];


            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";
            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";
            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel9").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display tenth recipe box
function display10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r5').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel10").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display eleventh recipe box
function display11() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r2').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel11").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display twelveth recipe box
function display12() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r6').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";
            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel12").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display thirteenth recipe box
function display13() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r3').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel13").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display fourteenth recipe box
function display14() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r7').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel14").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display fifteenth recipe box
function display15() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r4').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel15").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open16 == 1) {
                $("#panel16").slideToggle("slow");
                open16 = 0;
            }

        });
    });
}

//display sixteenth recipe box
function display16() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("recipes").doc('r8').onSnapshot(function (snap) {

            console.log(snap.data());

            document.getElementById("yield").innerHTML = snap.data()['yield '];

            document.getElementById("title1").innerHTML = snap.data()['title1'];

            var aaa = "<div>";
            for (var i = 0; i < snap.data()['Ingredients '].length; i++) {
                aaa += "<div>";
                aaa += (snap.data()['Ingredients '][i]);
                aaa += "</div>";

            }
            aaa += "</div>"
            $("#ingred").html(aaa);

            document.getElementById("title2").innerHTML = snap.data()['title2'];

            var bbb = "<div>";
            for (var i = 0; i < snap.data()['instructions'].length; i++) {
                bbb += "<div>";
                bbb += (snap.data()['instructions'][i]);
                bbb += "</div>";

            }
            bbb += "</div>"
            $("#instruct").html(bbb);

            var info = document.getElementsByClassName("theInfo");
            $("#panel16").html(info[0]);

            if (open1 == 1) {
                $("#panel1").slideToggle("slow");
                open1 = 0;
            }
            if (open2 == 1) {
                $("#panel2").slideToggle("slow");
                open2 = 0;
            }
            if (open3 == 1) {
                $("#panel3").slideToggle("slow");
                open3 = 0;
            }
            if (open4 == 1) {
                $("#panel4").slideToggle("slow");
                open4 = 0;
            }
            if (open5 == 1) {
                $("#panel5").slideToggle("slow");
                open5 = 0;
            }
            if (open6 == 1) {
                $("#panel6").slideToggle("slow");
                open6 = 0;
            }
            if (open7 == 1) {
                $("#panel7").slideToggle("slow");
                open7 = 0;
            }
            if (open8 == 1) {
                $("#panel8").slideToggle("slow");
                open8 = 0;
            }
            if (open9 == 1) {
                $("#panel9").slideToggle("slow");
                open9 = 0;
            }
            if (open10 == 1) {
                $("#panel10").slideToggle("slow");
                open10 = 0;
            }
            if (open11 == 1) {
                $("#panel11").slideToggle("slow");
                open11 = 0;
            }
            if (open12 == 1) {
                $("#panel12").slideToggle("slow");
                open12 = 0;
            }
            if (open13 == 1) {
                $("#panel13").slideToggle("slow");
                open13 = 0;
            }
            if (open14 == 1) {
                $("#panel14").slideToggle("slow");
                open14 = 0;
            }
            if (open15 == 1) {
                $("#panel15").slideToggle("slow");
                open15 = 0;
            }

        });
    });
}