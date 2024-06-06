

const HandleDelete=async(id)=>{
  const response= await fetch('https://jopsearch-backend.onrender.com/delete/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.href = "home.html"
        //window.location.reload()
}

onload= async() => {
  
    const card=document.getElementById('card')

    const response = await fetch('https://jopsearch-backend.onrender.com/jobs/');
    const result = await response.json();
    
    result.forEach((item)=>{
      const container=
      `
        <div class="job">
           <div class="row-job">
              <h4 class="title">${item.title}</h4>
              <div class="delete">
               <button class="delete-button" onClick={HandleDelete(${item.id})}>
                 <i class="fas fa-trash"></i>
               </button>
           </div>
           </div>
           <p class="city">City: ${item.city}</p>
           <p class="cat">Categoery: ${item.cat}</p>
           <article class="desc">${item.content}</article>                     
           <div class="apply">
               <div class="button-form">
                  <a  href="createApply.html?id=${item.id}">
                    <button class="button-apply">Apply</button>
                  </a>
                   
                 
               </div>
           </div>            
        </div>
 
      `
        card.innerHTML+=container
    })
  };

  

