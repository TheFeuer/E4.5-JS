const dontProto = () => {
    return Object.create(null)
}

console.log(dontProto())