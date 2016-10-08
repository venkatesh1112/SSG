// Get the modal
var modal = document.getElementById('myModal');
//alert("i am 1");
var img = document.getElementById('myImg');
//alert("i am 2");
var modalImg = document.getElementById("img01");
//alert("i am 3");


img.onclick = function(){
//alert("i am 4");
    modal.style.display = "block";
	//alert("i am 5");
    modalImg.src = this.src;
	//alert("i am 6");
   
};
var span = document.getElementsByClassName("close")[0];
//alert("i am 7");
span.onclick = function() {
//alert("i am 8");
    modal.style.display = "none";
	//alert("i am 9")
}