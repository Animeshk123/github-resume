const token = localStorage.getItem("token");
const login = document.querySelector(".rest");
const whole = document.querySelector(".whole");
const notlogin = document.querySelector(".notlogin");
const projects = document.querySelector(".projects");

// login
if (token != null) {
    login.style.display = "none";
    notlogin.style.display = "none";
    whole.style.display = "block";
}
// if not login
else {
    login.style.display = "block";
    whole.style.display = "none";
    notlogin.style.display = "block";
}

for (let i = 0; i < data.length; i++) {
    let html = ` <div class="project">
            <h3 id="projectname">${data[i].name}</h3>
            <p>source code</p>
            <a href=${data[i].source} >${data[i].source}</a> <i class="fas fa-share-square"></i>
            <p>live preview</p>
            <a href=${data[i].live}>${data[i].live}/</a> <i class="fas fa-share-square"></i>
        </div>`;
        projects.innerHTML += html;
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".load").style.display = "none";
        document.querySelector(".load").style.pointerEvents = "none";
    }, 2000)
})