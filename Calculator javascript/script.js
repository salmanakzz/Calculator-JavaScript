
var isOperatorClicked = new Boolean(false);
var oldValue;
var newValue;
var operation;
function buttonclick(val)
{
    document.getElementById("screen").style.textAlign = "right"
    if(isOperatorClicked){
        document.getElementById("screen").value=val;
        isOperatorClicked=false;
    }else{
        document.getElementById("screen").value+=val;
    }

    
}
function clearDisplay(){
    document.getElementById("screen").value="";

}
function equalClick(){
    

    switch (operation){
    case 1:{
        newValue=document.getElementById("screen").value

        var result=eval(oldValue)+eval(newValue)
    document.getElementById("screen").value=result
    }
    break;
    case 2:{
        newValue=document.getElementById("screen").value
    
        var result=eval(oldValue)-eval(newValue)
        document.getElementById("screen").value=result
    }
    break;
    case 3:{
        newValue=document.getElementById("screen").value
        
        var result=eval(oldValue)*eval(newValue)
        document.getElementById("screen").value=result
    }    
    break;
    case 4:{
        newValue=document.getElementById("screen").value
    
        var result=eval(oldValue)/eval(newValue)
        document.getElementById("screen").value=result
    }
    break;
    default :{
        document.getElementById("screen").value="";
    }

}

}
function plusClicked(){
    operation=1;
    isOperatorClicked=true
    oldValue=document.getElementById("screen").value


}
function minusClicked(){
    operation=2;
    isOperatorClicked=true
    oldValue=document.getElementById("screen").value


}
function mulClicked(){
    operation=3;
    isOperatorClicked=true
    oldValue=document.getElementById("screen").value


}
function divClicked(){
    operation=4;
    isOperatorClicked=true
    oldValue=document.getElementById("screen").value


}


