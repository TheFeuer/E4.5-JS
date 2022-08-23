const obj = {
    str: 'string',
    int: 5,
    1234: '1234',
    obj2: { obj3: 'obj3' },
}

const bullProp = (prop, obj) => {
    if (prop in obj) return true
    else return false
}

console.log(bullProp('string', obj))
console.log(bullProp('str', obj))