export const resources = [
    { id : 1, name : 'Dan Stevenson' },
    { id : 2, name : 'Talisha Babin' }
];

export const events = [
    { id : 1, startDate : '2022-01-01', duration : 3, durationUnit : 'd', name : 'Event 1' },
    { id : 2, duration : 4, durationUnit : 'd', name : 'Event 2' }
];

export const assignments = [
    { event : 1, resource : 1 },
    { event : 2, resource : 2 }
];

export const dependencies = [
    { fromEvent : 1, toEvent : 2 }
]

export const calendars = [];