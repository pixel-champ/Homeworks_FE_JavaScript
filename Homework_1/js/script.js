let radius = 25;
let height = 40;
let volume = Math.PI * Math.pow(radius, 2) * height;
let S = Math.PI*Math.pow(radius, 2);
let dashes = `---------------------`;

console.log(`**************
Объем цилиндра с площадью основы S = ${S}, радиусом R = ${radius} и высотой H = ${height} равен:
${dashes}
V = ${volume}
${dashes}
end.`);