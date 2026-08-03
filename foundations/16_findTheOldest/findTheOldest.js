const findTheOldest = function(people) {
    const arragedByAge = people.sort((p1, p2) => {
        const currentYear = new Date().getFullYear();
        const person1 = (p1.yearOfDeath ?? currentYear) - p1.yearOfBirth;
        const person2 = (p2.yearOfDeath ?? currentYear) - p2.yearOfBirth;
        return person1 > person2 ? -1 : 1;
    });
    return arragedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
