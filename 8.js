const massiv = new Map([
    ['Italian','Ferrari'],
    ['British','Jaguar'],
    ['German','Mercedes-Benz'],
    ['French','Renault'],
    ['Swedish','Volvo'],
])
massiv.forEach((y,x) => {
    console.log(`Ключ — ${x}, значение — ${y}`)
})
