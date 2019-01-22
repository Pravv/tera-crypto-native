const fs = require('fs')

const file = `${__dirname}/build/Release/tera_crypto_native.node`
if(!fs.existsSync(file))
    throw Error(`tera-crypto-native: No build found (arch=${process.arch}, modulesVer=${process.versions.modules})`)

module.exports = require(file)
