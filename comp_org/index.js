var vir_mem;
var main_memory;
var page_size;
var arr1 = [];
var arr2 = [];
var arr3 = [];
function insertValues()
{
    var vir_mem = document.getElementById('vm').options[0].text;
    var main_memory = document.getElementById('mm').options[document.getElementById('mm').selectedIndex].text;
    var page_size = document.getElementById('ps').options[document.getElementById('ps').selectedIndex].text;
    document.getElementById("tb").rows[1].style.backgroundColor = "#040081";
    document.getElementById("tb").rows[1].style.color = "white";
    document.getElementById("tb").rows[1].style.fontWeight= "900";  
    document.getElementById("tb").rows[1].cells[0].innerHTML = vir_mem; 
    document.getElementById("tb").rows[1].cells[1].innerHTML = main_memory; 
    document.getElementById("tb").rows[1].cells[2].innerHTML = page_size;
}
var arr1 = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32];
var arr2 = [4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64];
var arr3 = [8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128]; 
for(var i = 0; i < arr1.length; i++)
{
    var page_size = document.getElementById('ps').options[document.getElementById('ps').selectedIndex].text; 
    if(pagesize == "2KB")
    {
	document.getElementById('vm').options[i].text = arr1[i];
	document.getElementById('mm').options[i].text = arr2[i];
    }
    else if(pagesize == "4KB")
    {
	document.getElementById('vm').options[i].text =  arr1[i];
	document.getElementById('mm').options[i].text =  arr2[i];
    }
    else(pagesize == "8KB")
    {
	document.getElementById('vm').options[i].text = arr1[i];
	document.getElementById('mm').options[i].text = arr2[i];
    }
}
    
