function calculate(){
    let answer= 0;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;
    
    //console.log("before switch",operator)
    switch(operator){
        case "+":
            //console.log("in add");
            answer = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            //console.log("in sub");
            answer = parseInt(num1) - parseInt(num2);
            break;
        case "multiply":
            //console.log("in multiply");
            answer = parseInt(num1) * parseInt(num2);
            operator="&#215"
            break;
        case "divide":
            //console.log("in divide");
            if(num2 == 0){
                answer ="Undefined, division by 0";}
            else{
                answer = parseInt(num1) / parseInt(num2);}
            operator="&#247"
                break;
        case "%":
            //console.log("in mod");
            if(num2 == 0){
                answer ="Undefined, division by 0";}
            else{
                answer = parseInt(num1) % parseInt(num2);}
            break;
        case "^":
            //console.log("in exponent");
            answer = Math.pow(num1,num2);
            break;
        default:
            console.log("no match")
    }
    document.getElementById("answer").innerHTML = ""+num1+" " +operator+" "+num2+" = "+ answer;
}
