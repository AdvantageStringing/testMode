function sendMailHelp(content) {
    emailjs.send("service_4ifttdl", "template_brve9ea", content)
    .then(function(res){
        console.log("success", res.status);
    })
}

function sendMailComplete(content) {

    console.log("sent", content);

    var racketVals = [];
    var allRacketVals = [];

    for(let i=0; i<content["rackets"].length; i++) {
        for(let prop in content["rackets"][i]) {
            racketVals.push(content["rackets"][i][prop])
        }
        allRacketVals.push(racketVals);
        racketVals = [];
    }
    content["rackets"] = allRacketVals;



    var mysteryStringVals = [];
    var allMysteryStringVals = [];

    for(let i=0; i<content["mysteryString"].length; i++) {
        for(let prop in content["mysteryString"][i]) {
            mysteryStringVals.push(content["mysteryString"][i][prop])
        }
        allMysteryStringVals.push(mysteryStringVals);
        mysteryStringVals = [];
    }
    content["mysteryString"] = allMysteryStringVals;



    var customerStringVals = [];
    var allCustomerStringVals = [];

    for(let i=0; i<content["customerProvideInput"].length; i++) {
        for(let prop in content["customerProvideInput"][i]) {
            customerStringVals.push(content["customerProvideInput"][i][prop])
        }
        allCustomerStringVals.push(customerStringVals);
        customerStringVals = [];
    }

    content["customerProvideInput"] = allCustomerStringVals;

    console.log(content);
    
    emailjs.send("service_4ifttdl", "template_b3rp6xq", content)
    .then(function(res){
        console.log("success", res.status);
    })
}