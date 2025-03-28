//draft 3

document.querySelector('button').addEventListener('click', readBeforeBilling)
function readBeforeBilling() {
    let topic = document.querySelector('input').value
    fetch(`https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=${topic}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data[3][0]);
            document.querySelector('h2').innerText = data[3][0][0]
            document.querySelector('h3').innerText = data[3][0][1]

            fetch(`https://openlibrary.org/search.json?q=${data[3][0][1]}+${data[3][0][1]}+${data[3][0][1]}+${data[3][0][1]}+${data[3][0][1]}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    //console.log(data.docs[0]);







                })
                .catch(error => {
                    console.log(`error ${error}`);

                })




        })
        .catch(error => {
            alert(`error ${error}`);

        })
}


//draft 2
/*document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
fetch(`https://data.cms.gov/data-api/v1/dataset/c8ea3f8e-3a09-4fea-86f2-8902fb4b0920/data?column=${meds}`)
        .then(res => res.json())
        .then(data => {
        console.log(data[0]);
        console.log(data[0].Opioid_Drug_Flag);
        console.log(data[0].Brnd_Name);
       document.querySelector('h4').innerText = data[0].Opioid_Drug_Flag
       document.querySelector('h2').innerText = data[0].Brnd_Name
   
   
   
   
           })
           .catch(err => {
               console.log(`error ${err}`);
   
           })
        }

//Note to self: This is my first thought -draft1
/*document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
    fetch(`https://api.fda.gov/drug/ndc.json?search=${meds}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            console.log(data.results[0]);
            console.log(data.results[0].brand_name)
            console.log(data.results[0].generic_name)
            console.log(data.results[0].openfda.manufacturer_name)
            document.querySelector('h2').innerText = data.results[0].brand_name
            document.querySelector('h3').innerText = data.results[0].generic_name
           // document.querySelector('h4').innerText = data.results[0].openfda.manufacturer_name
           fetch(`https://data.cms.gov/data-api/v1/dataset/1fc57194-a51d-4864-aee6-de0889488151/data?keyword=${data.results[0].brand_name}/`)
          .then(res => res.json())
        .then(data => {
        console.log(data[0]);
        console.log(data[0].Opioid_Drug_Flag);
        document.querySelector('h4').innerText = data[0].Opioid_Drug_Flag
   
   
   
   
   
           })
           .catch(err => {
               console.log(`error ${err}`);
   
           })
})
        .catch(err => {
            console.log(`error ${err}`);

        })
    
}

fetch("https://data.cms.gov/data-api/v1/dataset/1fc57194-a51d-4864-aee6-de0889488151/data")
          .then(res => res.json())
        .then(data => {
        console.log(data[0]);
        console.log(data[0].Opioid_Drug_Flag);
        console.log(data[0].Brnd_Name);
       document.querySelector('h4').innerText = data[0].Opioid_Drug_Flag
       document.querySelector('h2').innerText = data[0].Brnd_Name
   
   
   
   
           })
           .catch(err => {
               console.log(`error ${err}`);
   
           })
//?column=Brnd_Name&column=Opioid_Drug_Flag

/*fetch("https://data.cms.gov/data-api/v1/dataset/c8ea3f8e-3a09-4fea-86f2-8902fb4b0920/data")
.then(res => res.json())
.then(data => {
    console.log(data[0]);
    console.log(data[0].Opioid_Drug_Flag);
    
    //console.log(data[3][1])





})
.catch(err => {
    console.log(`error ${err}`);

})
//https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=
//data.cms.gov/data-api/v1/dataset/{{dataset_id}}/data
//https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=

//https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=

//note to self: first idea 
/*document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
    fetch(`https://api.fda.gov/drug/ndc.json?search=${meds}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            console.log(data.results[0]);
            console.log(data.results[0].brand_name)
            console.log(data.results[0].generic_name)
            console.log(data.results[0].openfda.manufacturer_name)
            document.querySelector('h2').innerText = data.results[0].brand_name
            document.querySelector('h3').innerText = data.results[0].generic_name
           // document.querySelector('h4').innerText = data.results[0].openfda.manufacturer_name
           fetch(`https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=${data.results[0].brand_name}`)
           .then(res => res.json())
           .then(data => {
               console.log(data[3][1])
   
   
   
   
   
           })
           .catch(err => {
               console.log(`error ${err}`);
   
           })
})
        .catch(err => {
            console.log(`error ${err}`);

        })
    
}

//note to self: the goal of this app is to find the generic name of a medicine and see if cms will cover the generic name vs the brand name

*/
/*"https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=${data.results[0].brand_name}"
//document.querySelector('button').addEventListener('click', checkBefore)
//function checkBefore() {
    //let meds = document.querySelector('input').value*/


//https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=tuberc

fetch("https://openlibrary.org/search.json?q=")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.docs[0]);







    })
    .catch(error => {
        console.log(`error ${error}`);

    })


