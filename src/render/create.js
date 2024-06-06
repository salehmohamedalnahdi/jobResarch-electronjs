

let create=async(title,content,city,cat)=>{
    
    const response=await fetch('https://jopsearch-backend.onrender.com/create', {
      method: 'POST',
      body: JSON.stringify({
        title:title,
        content:content,
        city:city,
        cat:cat,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
   const result=await response.json();
   console.log(result);
   window.location.href = "home.html" 
}
   
   const submit=document.getElementById('submit')
   submit.addEventListener("click",(event)=>{
     let title=document.getElementById("title").value
     let content=document.getElementById("content").value
     let city=document.getElementById("city").value
     let cat=document.getElementById("cat").value
     if(!title || !content || !city || !cat)
      {
        return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
      }  
     create(title,content,city,cat)
     event.preventDefault();
   })