let x = 0
x = +x
if (isNaN(x)) {
    console.log('Упс, кажется, вы ошиблись')

} else if (typeof x !== 'number'){
    console.log('Упс, кажется, вы ошиблись')
} else {
    x % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное')
}
