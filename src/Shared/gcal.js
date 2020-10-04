import request from 'superagent'

const CALENDAR_ID = '1gt9rhhf3o8a3q6ogdl7v5efsg@group.calendar.google.com'
const API_KEY = 'AIzaSyAfOySSrtIT5Muvf0Coigoa635zqCcZpZk'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}