//get the preloader start
let preloader = document.querySelector('#loading')
	function myFuction(){
		preloader.style.display = 'none';
	}



//get the preloader endd

//get the button
    mybutton = document.getElementById("myBtn");

//when the user scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 40 ||
   document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  }else{
    mybutton.style.display = "none";
  }
}

//when the user click on the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome, firefox, IE and opera
}
