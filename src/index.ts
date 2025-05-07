// Problem-1

function formatString (input:string,toUpper?:boolean):string {
    if(toUpper===true){
        const resultString = input.toUpperCase();
        return(resultString);
    }
    else if (toUpper===false){
        const outPutString = input.toLowerCase();
        return(outPutString);
    }
    else{
       return input;
    }
}

