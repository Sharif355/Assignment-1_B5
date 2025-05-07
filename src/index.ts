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

// Problem-4
class vehicle {
    private make:string;
    private year:number;

    constructor(make:string,year:number){
        this.make= make;
        this.year= year;
    }

    public getInfo():string {
       return  `Make: ${this.make},Year: ${this.year}`
    }
}

class car extends vehicle {
    private model: string;

    constructor(make:string,year:number,model:string){
        super(make,year)
        this.model =model
    }

    public getModel():string{
        return  `Model: ${this.model}`
    }
}

