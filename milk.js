var rp=document.getElementById("rp-menu");


var rpkapa=document.getElementById("menukapa");
var rpac=document.getElementById("openmenu");
rpac.onclick = function()
{
   rp.style.opacity="1";
   rp.style.width="100%";


  rp.style.visibility="visible";
}
rpkapa.onclick = function()
{
   rp.style.opacity="0";

   rp.style.width="10%";

  rp.style.visibility="hidden";
 
}
