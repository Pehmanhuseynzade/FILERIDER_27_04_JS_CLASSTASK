let form = document.querySelector(".form")
let name = document.querySelector("#name")
let surname = document.querySelector("#surname")
let myfile = document.querySelector("#file")
let mybutton = document.querySelector(".btn")
let users = document.querySelector(".user")
let list = document.querySelector(".list")

let myform = []


myfile.addEventListener("change",(e)=>{
   // let files= Array.from(e.target.files)
     e.preventDefault()
     const fr = new FileReader()
     fr.readAsDataURL(myfile.files[0])
     fr.addEventListener("load",()=>{
          const url = fr.result
          if(myfile.files[0].type.includes("image")){
               img=url
          }
          else{
               alert("Zehmet olmasa sekil secin")
               myfile.value = ""
          }
     })
})

form.addEventListener("submit",(e)=>{
     e.preventDefault()
     // console.log(name.value)
     // console.log(surname.value)
     // console.log(mybutton.value)
     if( name.value.trim() == "" || surname.value.trim() == "" ){
          alert("sizin melumatlariniz yoxdur!")
     }
     else{
               list.innerHTML+=`<li class="list-group-item" style = "display: flex;align-items: center;justify-content: space-between;">
               <img style = "width:70px;height:70px;" src="${img}" alt="">
               <span>${name.value} ${surname.value} </span>
               <div>
               <button class="btn btn-danger remove"><i class=" trash fa-solid fa-trash"></i></button>
               </div>
               </li>`
              
     }
     mybutton.value = ""
})


// myfile.addEventListener("change",(e)=>{
//     let file= Array.from(e.target.files)
//           const fileReader = new FileReader();
//           fileReader.readAsDataURL(file);
//           fileReader.addEventListener("load",()=>{
//                console.log(fileReader.result)
//           })
     



// })