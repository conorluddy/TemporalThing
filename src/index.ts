import { Temporal } from "@js-temporal/polyfill"

const now = Temporal.Now.plainDateTimeISO()
console.log(`Current date and time: ${now}`)
