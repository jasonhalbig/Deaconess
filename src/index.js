import "./styles.css";
require("jquery");
const axios = require("axios");
const flatpickr = require("flatpickr");

const BASE_URL = "https://5bc31c65-b2f0-447b-b9c0-fca929b0b8f6.mock.pstmn.io";
const ENDPOINT = "/api/Schedule/GetAvailableTimeslots";
const key = "PMAK-5dc2ebf7fbc621002a375da5-77e646bf0a98abcf6e195cc47b38109953";

document.getElementById("app").innerHTML = `
<h1>Deaconess - Schedule Now</h1>
<div>
  <h4>This demo uses:</h4>
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">flatpkr</a>
  <span>and</span>
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">axios</a>
</div>
`;

var today = new Date();

flatpickr("#flatpickr", {
  // A string of characters which are used to define how the date will be displayed in the input box.
  dateFormat: "Y-m-d",

  // A reference to another input element.
  // This can be useful if you want to show the user a readable date, but return something totally different to the server.
  //altFormat: "F j, Y",

  // Exactly the same as date format, but for the altInput field
  altInput: false,

  // This class will be added to the input element created by the altInput option.
  // Note that altInput already inherits classes from the original input.
  //altInputClass: "",

  // Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
  //allowInput: false,

  // Instead of body, appends the calendar to the specified node instead.
  //appendTo: null,

  // Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat.
  // If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
  ariaDateFormat: "F j, Y",

  // Whether clicking on the input should open the picker. You could disable this if you wish to open the calendar manually with.open()
  clickOpens: false,

  // Sets the initial selected date(s).
  // If you're using mode: "multiple" or a range calendar supply an Array of Date objects or an Array of date strings which follow your dateFormat.
  // Otherwise, you can supply a single Date object or a date string.
  //defaultDate: null,

  // Initial value of the hour element.
  //defaultHour: 12,

  // Initial value of the minute element.
  //defaultMinute: 0,

  // The minimum date that a user can start picking from, as a JavaScript Date.
  minDate: today,

  // The maximum date that a user can pick to, as a JavaScript Date.
  maxDate: null,

  // Dates to disable, using intervals
  // disable: [ { 'from': '2015-09-02', 'to': '2015-10-02' } ]
  //disable: null,

  // Set disableMobile to true to always use the non-native picker.
  // By default, flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
  //disableMobile: false,

  // See Enabling dates
  //enabl: [],

  // Enables time picker
  //enableTime: false,

  // Enables seconds in the time picker.
  ///enableSeconds: false,

  // Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
  //formatDate: null,

  // Adjusts the step for the hour input (incl. scrolling)
  //hourIncrement: 1,

  // Displays the calendar inline
  inline: true,

  // Show the month using the shorthand version.
  shorthandCurrentMonth: false,

  // Adjusts the step for the minute input (incl. scrolling)
  minuteIncrement: 5,

  // "single"  "single", "multiple", or "range"
  mode: "single",

  // next/prev arrows
  prevArrow: "&lt;",
  nextArrow: "&gt;",

  // Function that expects a date string and must return a Date object
  parseDate: false,

  // Position the calendar inside the wrapper and next to the input element. (Leave false unless you know what you're doing.
  static: false,

  // Displays time picker in 24 hour mode without AM/PM selection when enabled.
  time_24hr: false,

  // Enables display of week numbers in calendar.
  weekNumbers: false,

  // Hides the day selection in calendar.
  // Use it along with enableTime to create a time picker.
  noCalendar: false,

  onChange: function(selectedDates, dateStr, instance) {
    console.log("Calendar Change");
  }
});

export async function getAllAvailability(providerID, visitType) {
  const request = {
    method: "post",
    url: BASE_URL + ENDPOINT,
    headers: { "x-api-key": key },
    data: {
      ProviderID: providerID,
      VisitType: visitType
    }
  };
  const response = await axios(request);
  if (response.status === 200) return response.data;
}
