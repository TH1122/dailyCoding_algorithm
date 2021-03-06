var romanToInt = function(s) {
    let result = 0;
    let obj = {"I": 1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000, "IV":4, "IX": 9, "XL":40, "XC":90, "CD": 400, "CM": 900 };
    for (let i=0; i<s.length; i++) {
        if(obj[s[i]+s[i+1]]) {
            result += obj[s[i]+s[i+1]];
            i += 1;
        }
        else {
            result += obj[s[i]];
        }
    }
    return result;
};