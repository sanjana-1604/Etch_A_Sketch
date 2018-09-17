function addGrid(col, row)
{

  var container = document.getElementsByClassName("container");



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
