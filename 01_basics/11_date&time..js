// Date obj represent a single moment in time in ms from 1 jan 1970

let myDate = new Date();

console.log( myDate ); // 2026-03-09T04:26:25.630Z
console.log( myDate.toString() ); // Mon Mar 09 2026 09:56:25 GMT+0530 (India Standard Time)
console.log( myDate.toISOString() ); // 2026-03-09T04:26:25.630Z
console.log( myDate.toJSON() ); // 2026-03-09T04:26:25.630Z
console.log( myDate.toDateString() ); // Mon Mar 09 2026
console.log( myDate.toLocaleString() ); // 3/9/2026, 10:00:06 AM

let createdDate1 = new Date( 2026, 0, 21 );
console.log( createdDate1 ); // 2026-01-20T18:30:00.000Z
console.log( createdDate1.toDateString() ); // Wed Jan 21 2026

let createdDate2 = new Date( 2026, 2, 11, 5, 3 );
console.log( createdDate2 ); // 2026-03-10T23:33:00.000Z
console.log( createdDate2.toLocaleString() ); // 3/11/2026, 5:03:00 AM

// toLocaleString have many parameters for customization

let createdDate3 = new Date( "2026-01-21" );
console.log( createdDate3.toLocaleString() ); // 1/21/2026, 5:30:00 AM

let createdDate4 = new Date( "21-01-2026" );
console.log( createdDate4.toLocaleString() ); // Invalid Date yyyy-mm-dd  or mm-dd-yyyy

console.log( myDate.getHours() ); // 9
console.log( myDate.getMonth() ); // 2
console.log( myDate.getMinutes() ); // 56

// ctrl + space -> options vs code intellisense

// Timestamps

let myTimestamp = Date.now();
console.log( myTimestamp );
console.log( myDate.getTime() );
console.log( Math.floor( Date.now() / 1000 ) );

// 1773030385708
// 1773030385630
// 1773030385


