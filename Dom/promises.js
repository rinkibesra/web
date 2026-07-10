function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success: Data was saved");
        } else {
            reject("Failed: Data not saved");
        }
    });
}
 saveToDB("rinki").then((result)=>{
    console.log("promise1 was resolved");
    console.log("result:",result);
    return saveToDB("besra");
 }).then((result)=>{
    console.log("Promse2 was resolved");
    console.log("result:",result);
    return saveToDB("pinki");
 })
 .then((result)=>{
    console.log("promse3 was resolved");
    console.log("result:",result);
    return saveToDB("babita");
 })
 .catch((error)=>{
    console.log("promise was rejected");
    console.log("error:",error);
 });