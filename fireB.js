const admin = require('firebase-admin');

var serviceAccount = require('./admin.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://planar-osprey-317715-default-rtdb.firebaseio.com/",
    authDomain: "planar-osprey-317715.firebaseapp.com",
});

var db = admin.database();
// var userRef = db.ref("users");

// addUser(obj, res) {
//     var oneUser = userRef.child(obj.roll);
//     oneUser.update(obj, (err) => {
//         if (err) {
//             res.status(300).json({ "msg": "Something went wrong", "error": err });
//         }
//         else {
//             res.status(200).json({ "msg": "user created sucessfully" });
//         }
//     })
// }