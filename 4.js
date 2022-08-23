const device = {
    category: 'home',
    type: 'electric',
    state: 'off',
    serve: function (message = 'Serving') {
        if (this.state === 'on') console.log(message)
        else console.log('Нет потребителей')
    },
    getInfo: function () {
        if (this.state === 'on') {
            for (let key in this)
                if (this.hasOwnProperty(key)) console.log(key, ':', this[key])
        } else console.log('Это устройство выключено')
    },
    getPower: function () {
        if (this.state === 'on' && this.wattage) return this.wattage
        else return 0
    },
}

device.power = function () {
    if (this.state === 'off') this.state = 'on'
    else this.state = 'off'
}

const kitchenDevice = Object.create(device)
const mediaDevice = Object.create(device)

kitchenDevice.subcat = 'kitchen'
kitchenDevice.serve.Prototype = function () {
    console.log('Используется на кухни')
}

mediaDevice.subcat = 'media'
mediaDevice.message = 'entertain us'


const microwave = Object.create(kitchenDevice)
microwave.name = 'LG'
microwave.power()
microwave.wattage = 700
microwave.getInfo()
microwave.heat = function () {
    this.serve('Я умею готовить')
    console.log('Разогревание еды ')
}
microwave.heat()


const mixer = Object.create(kitchenDevice)
mixer.name = 'Mixer'
mixer.power()
mixer.message = 'Блендер готов шуметь'
mixer.mode = 1
mixer.wattage = 50
mixer.getInfo()
mixer.chop = function () {
    this.serve()
    console.log('EXTERMiNATE')
}
mixer.chop()


const vinyl = Object.create(mediaDevice)
vinyl.message = 'Врубай рок'
vinyl.inputs = {
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
}
vinyl.dimensions = {
    width: 950,
    height: 50,
    depth: 55,
}

vinyl.power()
vinyl.getInfo()
vinyl.power()
vinyl.getInfo()

const devices = []

devices.push(microwave)
devices.push(mixer)
devices.push(vinyl)

function powerTotal() {
    let power = 0
    for (let device of devices) power += parseInt(device.getPower())
    return power
}

console.log('Обшее энергопотребление : ' + powerTotal() + 'W')