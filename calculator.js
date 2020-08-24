function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-vlaue").innerText=num;}
    else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);}

}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory(" ");
            printOutput(" ");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                //condition?true:false
                output=output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory(history);
                }
                else{
                    printOutput(" ")
                    history=history+this.id;
                    printHistory(history);
                }
            }
        }
        })
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number
            output=output+this.id;
            printOutput(output);
        }

})
}
