const leapYears = function(year) {
    const divBy4 = () => year / 4;
    const divBy100 = () => year / 100;
    const divBy400 = () => year / 400;
    let divBy4Test = divBy4();
    let divBy100Test = divBy100();
    let divBy400Test = divBy400();

    if (Number.isInteger(divBy4Test)) {
        if (Number.isInteger(divBy100Test)) {
            if (Number.isInteger(divBy400Test)) {
                return true;
            } else return false;
        } else return true;
    } else return false;
    
};

// Do not edit below this line
module.exports = leapYears;
