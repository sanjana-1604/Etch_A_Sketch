var Input_height;
var Input_width;
function addGrid()
{
  var container = document.getElementsByClassName("container");
  var row = Input_height;
  var col = Input_width;

  for(var i=0; i<(row*col);i++)
  {
    var gridIDCount = "Flex-Item-";
      var flex_item = document.createElement("div");
      gridIDCount += i;
      flex_item.setAttribute("id", gridIDCount);
      flex_item.style.border = "1px solid black";
      //flex_item.style.flexgrow = "1";

      flex_item.innerHTML=" ";
      container[0].appendChild(flex_item);
  }
  container[0].style.height=row*20 +10;
  container[0].style.width=col*20;

 var str = "repeat(" + row+ ", 20px)/repeat(" +col +", 20px)";
  container[0].style.gridTemplate=str;
}

function validateInput()
{
   Input_height = document.getElementById("Input_height").value;
   Input_width = document.getElementById("Input_width").value;
  alert(Input_width);
  if((Input_height > 24) || (Input_width > 64))
  {
    alert("Please enter the values in limit")
  }
  else {
    {
      window.location.href='Grid-Page.html';

    }
  }
}
