

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
var modal4 = document.getElementById('modal4');
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
img1.onclick = function() {
    modal1.style.display = "block";
    $("body").css('overflow', 'hidden');
}
img2.onclick = function() {
    modal2.style.display = "block";
    $("body").css('overflow', 'hidden');
}
img3.onclick = function(){
    modal3.style.display = "block";
    $("body").css('overflow', 'hidden');
}
img4.onclick = function(){
    modal4.style.display = "block";
    $("body").css('overflow', 'hidden');
}
span1.onclick = function(){
    modal1.style.display = "none";
    $("body").css('overflow', 'scroll');
}
span2.onclick = function(){
    modal2.style.display = "none";
    $("body").css('overflow', 'scroll');
}
span3.onclick = function(){
    modal3.style.display = "none";    
    $("body").css('overflow', 'scroll');
}
span4.onclick = function(){
    modal4.style.display = "none";
    $("body").css('overflow', 'scroll');
}


window.onclick = function(event) {
    if (event.target == modal1){
        modal1.style.display = "none";
        $("body").css('overflow', 'scroll');
    }
    if (event.target == modal2){
        modal2.style.display = "none";
        $("body").css('overflow', 'scroll');
    }
    if (event.target == modal3){
        modal3.style.display = "none";
        $("body").css('overflow', 'scroll');
    }
    if (event.target == modal4){
        modal4.style.display = "none";
        $("body").css('overflow', 'scroll');
    }

}