const date = new Date("2022-10-15T00:00:00.000Z").toDateString();
const d = new Date("2022-10-15T00:00:00.000Z").toUTCString();
console.log(d.substring(0, 11))