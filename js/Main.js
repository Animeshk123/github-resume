const button = document.getElementById("submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");



button.addEventListener("click",() => {
   if(name.value&&email.value&&password.value&&cpassword.value) {
       if(password.value === cpassword.value) {
          localStorage.setItem("token","animeshisgreet") ;
          const user = {
              name:name.value,
              email:email.value,
              password:password.value
          }
          localStorage.setItem("data",JSON.stringify(user));
          name.value = "";
          email.value = "";
          password.value = "";
          cpassword.value = "";
          window.open("../index.html","_self");
       }
        password.value = "";
        cpassword.value = "";
   }
})


window.addEventListener("load",() => {
    setTimeout(() => {
        document.querySelector(".load").style.display = "none";
        document.querySelector(".load").style.pointerEvents = "none";
    },2000)
})