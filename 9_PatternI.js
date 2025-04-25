// Pattern Nine
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// *

function patternNine(n) {
    let result = "";

    for(let i = 1; i <= (n * 2) - 1; i++){ // Row Loop
        let iChange = i > n ? (n * 2) - i : i; // Row Change
        for(let j = 1; j <= iChange; j++){ // Column Loop
            result += "*" + " ";
        }
        result += '\n';
    }
    console.log(result.trim());
}

patternNine(5)