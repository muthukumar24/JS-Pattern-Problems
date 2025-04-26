// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function patternSeventeen(n) { 
    let result = "";

    for(let i = 1; i <= n * 2; i++){ // For Row
        let rowChange = i > n ? (n * 2) - (i - 1) : i; // For Spaces

        for(let j = 1; j <= n * 2; j++){ // For Column
            if(j <= n - rowChange + 1 || j > n + rowChange - 1){
                result += "*";
            }
            else {
                result += " ";
            }
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternSeventeen(5);