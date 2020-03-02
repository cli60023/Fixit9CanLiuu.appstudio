let noun=""

ABscenario.onshow=function(){
  
}


Button2.onclick=function(){
  Label1.clear
  Label1.value= accountName+ ': A' + Dropdown1.value +' in Nebraska was arrested this morning after '+ Dropdown2.value+'ing in front of a '+Dropdown3.value+Dropdown1.value+'. The perpetrator had a history of '+Dropdown2+'ing, but no one - not even her '+Dropdown1.value+" - ever imagined she'd "+Dropdown2.value+" with a "+Dropdown1.value +"Even her "+Dropdown1.value+'was surprised. "I always thought she was "'+Dropdown3.value+", but I never thought she'd"+ 'do something like this."Either way, we imagine that after witnessing her '+Dropdown2.value+"ing with a"+ Dropdown3.value+ Dropdown1.value+", there are probably a whole lot of "+Dropdown1.value+ "s that are going to need therapy."
  
}

Button3.onclick=function(){
  Dropdown1.value = ""
  Dropdown2.value = ""
  Dropdown3.value = ""
  Label1.value = ""
}

Dropdown1.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    Dropdown1.value = s   // make dropdown show choice user made
    //NSB.MsgBox("s is " + s + " and .selection is " + Dropdown1.selection)
  }
}

Dropdown2.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    Dropdown2.value = s   // make dropdown show choice user made
    //NSB.MsgBox("s is " + s + " and .selection is " + Dropdown2.selection)
  }
}

Dropdown3.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    Dropdown3.value = s   // make dropdown show choice user made
    //NSB.MsgBox("s is " + s + " and .selection is " + Dropdown3.selection)
  }
}
