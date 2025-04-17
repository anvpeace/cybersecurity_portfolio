var networkPage = document.getElementById("Networking");
var ethicalPage = document.getElementById("Ethical-Hacking");
var resumePage = document.getElementById("Resume");

networkPage.addEventListener("click", function(){
    window.open('networking.html', '_blank')
    console.log("working");
});

ethicalPage.addEventListener("click", function(){
    window.open('ethical.html', '_blank');
});

