exports.randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

exports.sleep = (duration) => new Promise(resolve => { setTimeout(resolve, duration) })

    (async () => {
        console.time('sleep')
        await this.sleep(1000)
        console.timeEnd('sleep')
    })()