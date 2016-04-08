<script type="text/javascript">
function changeImage()
{
document.images["jsbutton"].src= "images/menu_home.png";
return true;
}
function changeImageBack()
{
 document.images["jsbutton"].src = "images/menu_home_active.png";
 return true;
}
function handleMDown()
{
 document.images["jsbutton"].src = "images/menu_home_active.png";
 return true;
}
function handleMUp()
{
 changeImage();
 return true;
}
</script>
