const os = require('os')

// info about current user 

const user=os.userInfo()

// method returns the system uptime in seconds

const  uptime=os.uptime()
console.log(`uptime ${uptime} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
