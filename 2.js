x = 'undefined'
switch(typeof x) {
    case 'boolean':
        console.log('x - булевое значение')
    break

    case 'string':
        console.log('x - строка')
    break

    case 'number':
        console.log('x - число')
    break

    default:
        console.log('Тип x не определён')
}