console.log("This is my script")
let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "dsc41125",
    "email": "dsc41125@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }


submitBtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("Clicked")
    resultCont.innerHTML = `<img width="150" src="css/img/loading.svg">`
    let key = "ema_live_E1lS3DQS1y39qtCb27CRS41cGXqF1drRVTI5q4NZ"
    let email= document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
      let str = ''
      for (key of Object.keys(result)){
        if(result[key] !== "" && result[key]!==""){
        str = str + `<div>${key}: ${result[key]}</div>`
        }

      }
      console.log(str)
     resultCont.innerHTML = str
    })