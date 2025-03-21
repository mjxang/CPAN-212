import lodash, { findIndex } from "lodash";

const holidays = [
    {name: "Christmas", date: new Date("2025-12-25")},
    {name: "New Year", date: new Date("2025-01-01")},
    {name: "Valentine's Day", date: new Date("2025-02-14")},
];

let today = new Date();
today.setHours(0, 0, 0, 0);

holidays.forEach(holiday => {
    let dateDifference = holiday.date - today;
    let numDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    console.log(`${holiday.name} is in ${numDays} days`);
});

console.log(lodash.sample(holidays));

console.log(findIndex(holidays, { name: "Christmas" }));
console.log(findIndex(holidays, { name: "New Year" }));