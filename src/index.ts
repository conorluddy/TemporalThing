import { Temporal } from "@js-temporal/polyfill"

const now = Temporal.Now.plainDateTimeISO()

class TemporalThing extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    const container = document.createElement("div")
    container.innerHTML = `
      <input type="text" id="datepicker" placeholder="Pick a date" />
      <div id="calendar"></div>
    `
    shadow.appendChild(container)
    const input = shadow.getElementById("datepicker")
    input?.addEventListener("focus", () => this.showCalendar())
    const style = document.createElement("style")
    style.textContent = `
      #calendar {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          padding: 10px;
      }
    `
    shadow.appendChild(style)
  }

  showCalendar() {
    const calendar = this.shadowRoot?.getElementById("calendar")
    if (!calendar) {
      return
    }
    const today = Temporal.Now.plainDateISO()
    calendar.innerHTML = `<p>Today's Date: ${today}</p>`
  }
}

customElements.define("temporal-thing", TemporalThing)
