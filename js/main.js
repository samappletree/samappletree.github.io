

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

//JS for the modals
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
img1.onclick = function() {
    modal1.style.display = "block";

}
img2.onclick = function() {
    modal2.style.display = "block";
}
img3.onclick = function(){
    modal3.style.display = "block";
}
span1.onclick = function(){
    modal1.style.display = "none";
}
span2.onclick = function(){
    modal2.style.display = "none";
}
span3.onclick = function(){
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1){
        modal1.style.display = "none";
    }
    if (event.target == modal2){
        modal2.style.display = "none";
    }
    if (event.target == modal3){
        modal3.style.display = "none";
    }
}