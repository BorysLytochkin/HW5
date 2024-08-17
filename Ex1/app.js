"use strict"

function durationBetweenDates(
    firstDate = ' ', 
    secDate = ' ', 
    dimension = 'days' ) {  

    const start = new Date(firstDate);
    const end = new Date(secDate);

    let difference = Math.abs(end - start);

    switch (dimension) {
        case 'seconds':
            difference = Math.floor(difference / 1000);
            break;
        case 'minutes':
            difference = Math.floor(difference / 1000 / 60);
            break;
        case 'hours':
            difference = Math.floor(difference / 1000 / 60 / 60);
            break;
        case 'days':
            difference = Math.floor(difference / 1000 / 60 / 60 / 24);
            break;
    }
    return `${difference} ${dimension}`;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));     // '362 days'