var myimgobj = document.images["home_button"];

function changeImage()
{
document.images["home_button"].src= "images/menu_home.png";
return true;
}
function changeImageBack()
{
 document.images["home_button"].src = "images/menu_home_active.png";
 return true;
}
