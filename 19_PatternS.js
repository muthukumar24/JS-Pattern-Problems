//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         *

function patternNineteen(n) {
    let result = "";

    for(let i = (n * 2) - 1; i >= 1 ; i--){
        let rowChange = i > n ? (n * 2) - i : i;
        for(let j = 1; j <= rowChange; j++){
            result += "* ";
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternNineteen(5);