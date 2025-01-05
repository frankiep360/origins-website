/*Scroll Buttons*/
const buttonLeft = document.getElementById('leftButton')
const buttonRight = document.getElementById('rightButton')
buttonLeft.onclick = function (){ //Scroll Left with -
    document.getElementById('horizontalContainer').scrollLeft -= 1680
};
buttonRight.onclick = function (){ //Scroll right with +
    document.getElementById('horizontalContainer').scrollLeft += 1680
};

/*Functions to chnage Image on Hover*/
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

/* Set the width of "mySidenav" to open/close */
function openNav() 
{
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav()
{
  document.getElementById("mySidenav").style.width = "0";
}