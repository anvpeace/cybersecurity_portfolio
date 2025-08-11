var networkPage = document.getElementById("Networking");
var ethicalPage = document.getElementById("Ethical-Hacking");
var certificatesPage = document.getElementById("Certificates");
var SecurityPage = document.getElementById("Security");
var ProgrammingPage = document.getElementById("Programming");
var projectsPage = document.getElementById("Projects");

// window.onload = function(){

//    alert("The site still in development, but functional!")
// };

networkPage.addEventListener("click", function(){
    window.open('networking.html')
    console.log("working");
});

ethicalPage.addEventListener("click", function(){
    window.open('ethical.html');
});

certificatesPage.addEventListener("click", ()=> {
    window.open('certificates.html');
});

SecurityPage.addEventListener("click", ()=> {
    window.open('security.html');
    
});

ProgrammingPage.addEventListener("click", ()=>{
    window.open('programming.html');
});

projectsPage.addEventListener("click", ()=>{
    window.open('projects.html');
});

