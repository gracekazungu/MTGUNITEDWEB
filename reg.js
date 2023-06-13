document.getElementById("form").addEventListener("submit",async function(event){
    event.preventDefault()
    
    let firstName=document.getElementById(`first-name`).value;
    let secondName=document.getElementById(`second-name`).value;
    let lastName=document.getElementById(`last-name`).value;
    let date=document.getElementById(`date`).value;
    let email=document.getElementById(`email`).value;
    let data={
        firstName: firstName,
        secondName: secondName,
        lastName: lastName,
        date: date,
        email: email,
    };
    console.log({data});
    
    
    let result=await fetch("https://formsubmit.co/kazungungrace@gmail.com",{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
    console.log({result})
    
    
    let success=document.getElementById('success');
    result.id ? success.innerHTML='form submitted SuccessFully':success.innerHTML='form not submitted'
    })