
lstNames.onclick=function(choice){
  // notice the 'choice' parameter
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  // otherwise get user selection (second click) which is the index 
  // of the item chosen
  NSB.MsgBox("The choice is " + choice)
  
  // how to change text of an item already on the list
  // change Teddy, at location 2, to Esmerelda
  let newPlace = 2   //index where you want replacement to go
  NSB.$("lstNames_" + newPlace).textContent = "Esmerelda"
  
    // add a new item just for fun. It will go onto the end of the list
  lstNames.addItem("Garbanzo","active","default")

}



selSandwiches.onchange=function(){
NSB.MsgBox("Index of chosen item is "  +  selSandwiches.item  
               +  ", \nand the value is "  +  selSandwiches.value
               + ", and the text is " + selSandwiches.text);
}



//Uncomment below and comment onchange above
// to show how to to deal with multiple choices
/*
btnDone.onclick=function(){
  let message = "Your favorite sandwiches are:" 
  for (i = 0; i <= selSandwiches.text.length - 1; i++)
     message = message + "<br />" + selSandwiches.text[i]
  NSB.MsgBox(message)

  
}
