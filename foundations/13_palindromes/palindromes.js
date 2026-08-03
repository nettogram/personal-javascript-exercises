const palindromes = function (string) {
    string = string.toLowerCase();
    let Container1 = Array.from(string);
    Container1 = Container1.filter(char => (char != " " && 
                                            char != "," && 
                                            char != "!" && 
                                            char != "."))
    let left = 0;
    let right = Container1.length - 1;
    while (left < right) {
        if (Container1[left] !== Container1[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
