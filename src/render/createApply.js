

let createApply=async(id,name,email,cv)=>{
  const response=await fetch('https://jopsearch-backend.onrender.com/applyer/'+id, {
    method: 'POST',
    body: JSON.stringify({
      name:name,
      email:email,
      cv:cv,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result=await response.json();
  console.log(result);
  window.location.href = "home.html"
}


const submitApply=document.getElementById("submitApply")
submitApply.addEventListener("click",(event)=>{
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  let name=document.getElementById("name").value
  let email=document.getElementById("email").value
  let cv=document.getElementById("cv").value
  if(!name || !email || !cv)
    {
      return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
    } 
 
  createApply(id,name,email,cv)
  event.preventDefault();
  
})


