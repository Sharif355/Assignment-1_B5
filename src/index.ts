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

// Problem-2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
   return items.filter(item => item.rating >= 4)
}

// Problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays)
}


