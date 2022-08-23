const devices = []

function powerTotal() {
    let power = 0
    for (let device of devices) power += parseInt(device.getPower())
    console.log('Обшее энергопотребление: ' + power + 'W')
    return power
}

class Device {
    constructor(subcat, wattage, category, type, state, message) {
        this.subcat = subcat || 'not set'
        this.wattage = wattage || 0
        this.category = category || 'home'
        this.type = type || 'electric'
        this.state = state || 'off'
        this.message = message || 'Serving'
        devices.push(this)
    }

    power() {
        if (this.state === 'off') this.state = 'on'
        else this.state = 'off'
        console.log(`This device is ${this.state}`)
        powerTotal()
    }
    usage(message) {
        if (this.state === 'on') return message
        else return 'No power'
    }
    getInfo() {
        if (this.state === 'on') {
            usage(this.message)
            return `This is a ${this.category} ${this.type} device.`
        } else return 'The device is off'
    }
    getPower() {
        if (this.state === 'on' && this.wattage) return this.wattage
        return 0
    }
}

class KitchenDevice extends Device {
    constructor(name, mode, wattage, message, subcat, category, type, state) {
        super(
            subcat,
            wattage,
            category,
            type,
            state,
            (message = message || 'Used in kitchen')
        )
        this.subcat = subcat || 'kitchen'
        this.name = name || 'no name device'
        this.wattage = wattage || 0
        this.mode = mode || 0
    }

    getInfo() {
        if (this.state === 'on') {
            return `This '${this.name}' is a ${this.subcat} ${this.type} device. 
      It takes ${this.wattage} watts and is set to mode "${this.mode}" 
      ${this.usage(this.message)}`
        } else return super.getInfo()
    }
}

class MediaDevice extends Device {
    constructor(
        name,
        inputs,
        dimensions,
        wattage,
        message,
        subcat,
        category,
        type,
        state
    ) {
        super(
            subcat,
            wattage,
            category,
            type,
            state,
            (message = message || 'Playing music')
        )
        this.subcat = subcat || 'media'
        this.name = name || 'gadget'
        this.wattage = wattage || 0
        this.inputs = inputs || {}
        this.dimensions = dimensions || {}
    }
    getInfo() {
        if (this.state === 'off')
            return `This ${this.name} is a ${this.subcat} ${this.type} device. 
      It takes ${this.wattage} watts and has ${
                Object.keys(this.inputs).length
            } inputs.
      ${this.usage(this.message)}`
        else return this.usage(this.message)
    }
    getSize() {
        console.log('The dimensions WxHxD:')
        for (const [key, value] of Object.entries(this.dimensions)) {
            console.log(`${key}: ${value}`)
        }
    }
}


const microwave = new KitchenDevice('Oven', 'pizza', 700)

console.log(microwave.getInfo())
microwave.power()
console.log(microwave.getInfo())

const mixer = new KitchenDevice(
    'Mixer',
    'blend',
    50,
    'EXTERMiNATE'
)


console.log(mixer.getInfo())
mixer.power()
console.log(mixer.getInfo())


const _inputs = {
    jack: {
        type: '3.5mm',
        format: 'stereo',
        quantity: 1,
    },
    RCA: {
        type: 'RCA',
        formats: {
            white: 'left',
            red: 'right',
            both: 'stereo',
        },
        quantity: 2,
    },
    getInputs: function () {
        console.log('Inputs:')
        for (const key in this) {
            console.log(key, this[key])
        }
    },
}
const _dimensions = {
    width: 950,
    height: 50,
    depth: 55,
}
const vinyl = new MediaDevice(
    'Lenco',
    _inputs,
    _dimensions,
    200,
    'Врубай рок'
)

console.log(vinyl.getInfo())
vinyl.getSize()
vinyl.inputs.getInputs()
vinyl.power()
console.log(vinyl.getInfo())
vinyl.power()