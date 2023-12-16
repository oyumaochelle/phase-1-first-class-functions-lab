// Code your solution in this file!
function returnFirstTwoDrivers ( drivers){
    console.log['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2); 
}
function returnLastTwoDrivers(drivers){
    console.log['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier;
    }
}
function fareDoubler(fare){
    return 2 * fare;
}
function fareTripler(fare){
    return 3 * fare;
}
function selectDifferentDrivers(drivers, selectingDrivers){
    if (selectingDrivers ===returnFirstTwoDrivers){
        return drivers.slice (0,2);
    }else if (selectingDrivers ===returnLastTwoDrivers){
        return drivers.slice (-2);
    }
}