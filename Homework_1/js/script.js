const PI = Math.PI;
let radius = 10;
let height = 20;
let volume = PI * radius * height;
let s = PI*radius**2;

console.log(`**************
Объем цилиндра с площадью основы S = ${s}, радиусом R =  ${radius}, и высотой H = ${height} равен:
---------------------
V = ${volume}
---------------------
end.`);

// Один в один як в завданні, де значення мають різні кольори й знаходяться на різних рядках

console.log(`**************`);
console.log(`Объем цилиндра с площадью основы S =`, s, `, радиусом R =`, radius, ` и высотой H =`, height,` равен:`);
console.log(`---------------------`);
console.log(`V =`, volume);
console.log(`---------------------`);
console.log(`end.`);