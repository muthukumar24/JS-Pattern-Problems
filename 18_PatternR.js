//     *
//    * *
//   *   *
//  *     *
// *********
function patternEighteen(n) {
    let result = "";

    for(let i = 1; i <= n; i++){ // For Row
        for(let j = 1; j <= n - i; j++) { // For Row Spaces before pattern
            result += " ";
        }

        for(let k = 1; k <= (2 * i) - 1; k++) { // For Column
            if(k == 1 || k == (2 * i) - 1 || i == n){
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

patternEighteen(5);