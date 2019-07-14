//Helper array
const T9Array = [[],
[],
['a','b','c'],
['d','e','f'],
['g','h','i'],
['j','k','l'],
['m','n','o'],
['p','q','r','s'],
['t','u','v'],
['w','x','y', 'z']];

//Exported module function
//Function to list all the permutation of elements of n arrays
//args: number to be processed using T9 wordlist.
module.exports = {
    permutation: (args)=>{
        recursive = (acc, next, number)=>{
            let result = [];
            for (let i = 0; i < acc.length; i++) {
                const accElement = acc[i];
                for (let j = 0; j < next.length; j++) {
                    const nextElement = next[j];
                    result.push([accElement]+[nextElement]);
                }
            }
            if(number.length == 0){
                return result;
            }else{
                return recursive(result, T9Array[number.shift()], number);
            }
        };

        let number = args.toString(10).split('');
        if(number.length == 0){
            return [];
        }else if(number.length == 1){
            let result = [];
            let acc = T9Array[number[0]];
            for (let i = 0; i < acc.length; i++) {
                const accElement = acc[i];
                result.push([accElement]);
            }
            return result;
        }else{
            let acc = number.shift();
            let next = number.shift();
            return recursive(T9Array[acc], T9Array[next], number);
        }
    }
}