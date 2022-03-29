// return number with currency ex: currency = 'USD' => $9.000.000,79 & 'EUR' => €9,000,000.79
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
})
exports.formatCurrency = (number) => CURRENCY_FORMATTER.format(number)

// return number with local separator (undefined = local machine based) ex: 'es-sp' = 9,000,000.485 and 'us-US' = 9.000.000,485
const NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
exports.formatNumber = (number) => NUMBER_FORMATTER.format(number)


// return compact version of a number ex: 9,100,000 = 9,1M
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
})
exports.formatCompactNumber = (number) => COMPACT_NUMBER_FORMATTER.format(number)

const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
]
const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
})

//return human readable date not 8 number => ex: formatRelativeDate(new date().setDate(currentDate.getMonth()-2)) return "2 months ago"
exports.formatRelativeDate = (toDate, fromDate = new Date()) => {
    let duration = (toDate - fromDate) / 1000

    // loop through array division to check if duration is in second if not then do duration /= division.amount which will now format the duration to the next amount in array division
    for (let i = 0; i <= DIVISIONS.length; i++) {
        const division = DIVISIONS[i]
        if (Math.abs(duration) < division.amount) RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
        duration /= division.amount
    }
}