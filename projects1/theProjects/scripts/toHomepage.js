var recipeId = "r1";
var testVar2;

function toRecipePage() {
    window.location.href = "recipes.html";
}

function createUser() {

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).set({
            "name": user.displayName,
            "email": user.email,
        }, {
            merge: true
        });
        //         "total": 0,


        db.collection("users").doc(user.uid).onSnapshot(function (snap) {
            console.log("uid: ", user.uid);
            console.log("current data is...", snap.data()['name']);
            document.getElementById("stuff").innerHTML = snap.data()['name'];
        });
    });
};

firebase.auth().onAuthStateChanged(function (user) {
    db.collection('recipes').doc('r1').get().then(function (snap) {
        console.log(snap.data()['name']);
        var testVar = snap.data();
        //creating varibale for a recipe 
        testVar2 = snap.data()['name'];
    });


    //writing the recipe that the user has clicked into "history"
    function toRecipe1() {
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                //implementing the variable in to write it 
                //                  "recents": [testVar2, "test2", "test3"],
                "recents": firebase.firestore.FieldValue.arrayUnion(testVar2)
                //         "total": 0,
            });
        });
    }

    function toRecipe2() {
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                "recents": ["a", "b", "c"],

            });
        });
    }




});




createUser();