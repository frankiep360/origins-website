const buttonLeft = document.getElementById('leftButton')
const buttonRight = document.getElementById('rightButton')

buttonLeft.onclick = function (){ //Scroll Left with -
    document.getElementById('horizontalContainer').scrollLeft -= 1680
};
buttonRight.onclick = function (){ //Scroll right with +
    document.getElementById('horizontalContainer').scrollLeft += 1680
};

function changePostImpressionismImage(x,image){
  if(x == 1)
  {
    image.src="Photos/postImpressionEdited.png";
  }
  if(x == 2)
  {
    image.src="Photos/postImpressionBW.png";
  }
}
function changeSurrealismImage(y,image){
  if(y == 1)
    {
      image.src="Photos/surrealismUnedited.png";
    }
    if(y == 2)
    {
      image.src="Photos/surrealismEdited.png";
    }
}
function changePopArtImage(z,image){
  if(z == 1)
    {
      image.src="Photos/popArtEdited.png";
    }
    if(z == 2)
    {
      image.src="Photos/popArtBW.png";
    }
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }