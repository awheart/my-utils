// return first n index(es) of array - DEFAULT 1
exports.first = (array, n = 1) => {
    if (n === 1) return array[0]
    return array.filter((_, index) => index < n)
}

// return last n index of array - DEFAULT 1
exports.last = (array, n = 1) => {
    if (n === 1) return array[array.length - 1]
    return array.filter((_, index) => array.length - index <= n)
}

// return a sample of array
exports.sample = (array) => array[randomNumberBetween(0, array.length - 1)]

// return a property of array
exports.pluck = (array, key) => array.map(element => element[key])

// return multiple array grouped by key (key = age will return (n*diffents age) array with n element which share the same value age)
exports.groupBy = (array, key) => {
    return array.reduce((group, element) => {
        const keyValue = element[key]
        return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
    }, {})
}