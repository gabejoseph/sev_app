const users = [
    {"full_name": "Coach LA",
    "Organization": "Test",
    "_id": "1589492405498x518184698125008450",
    "timezone": "America/Los_Angeles"},
    {"full_name": "Coach NY",
      "Organization": "Test",
      "_id": "1589492405498x518184698125008367",
      "timezone": "America/New_York"}
]

// TOPICS

const topics = [
    {"active": "True", "name": "Weekly Goals", "program": "1577400952751x443095658217689900", "start_day": "Monday", "Created Date": "2019-12-26T22:59:17.757Z", "Created By": "1574873635764x839567162674233300", "Modified Date": "2020-07-20T17:47:51.810Z", "form": "form_goals", "start_day_int": 0, "weekly_count": 1, "hour": 8, "category": "Goals", "_id": "1577401157757x608309369383979100", "_type": "custom.sw_prgm_topic"},
  
    {"active": "True", "name": "Daily Assessment", "program": "1577400952751x443095658217689900", "start_day": "Monday", "Created Date": "2019-12-26T22:59:56.758Z", "Created By": "1574873635764x839567162674233300", "Modified Date": "2020-07-20T17:47:47.798Z", "form": "form_assess", "start_day_int": 0, "weekly_count": 7, "hour": 12, "category": "Assess", "_id": "1577401196758x439688071809190660", "_type": "custom.sw_prgm_topic"},
  
    {"active": "True", "name": "Weekly Reflection", "program": "1577400952751x443095658217689900", "start_day": "Sunday", "Created Date": "2019-12-26T23:01:12.534Z", "Created By": "1574873635764x839567162674233300", "Modified Date": "2020-07-20T17:47:43.033Z", "form": "form_reflect", "start_day_int": 6, "weekly_count": 1, "hour": 20, "category": "Reflect", "_id": "1577401272534x606016218540235800", "_type": "custom.sw_prgm_topic"}
]

// TRANSFORM

const transformedData = [
    {"name":"Weekly Goals","topic":"1577401157757x608309369383979100","status":"Waiting","date":1601294400000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601308800000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601395200000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601481600000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601568000000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601654400000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601740800000,"user":"1589492405498x518184698125008450"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601827200000,"user":"1589492405498x518184698125008450"},
    {"name":"Weekly Reflection","topic":"1577401272534x606016218540235800","status":"Waiting","date":1601856000000,"user":"1589492405498x518184698125008450"},
    {"name":"Weekly Goals","topic":"1577401157757x608309369383979100","status":"Waiting","date":1601294400000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601308800000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601395200000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601481600000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601568000000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601654400000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601740800000,"user":"1589492405498x518184698125008367"},
    {"name":"Daily Assessment","topic":"1577401196758x439688071809190660","status":"Waiting","date":1601827200000,"user":"1589492405498x518184698125008367"},
    {"name":"Weekly Reflection","topic":"1577401272534x606016218540235800","status":"Waiting","date":1601856000000,"user":"1589492405498x518184698125008367"}
]

// POST

// POST the payload to a test REST API endpoint such as Requestbin to replicate sending the payload to a 3rd party system

export const data = {
    users, 
    topics,
    transformedData
};