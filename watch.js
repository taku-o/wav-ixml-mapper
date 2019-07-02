"use strict";
const fs = require('fs');
fs.watch('work', {
    persistent: true,
    recursive: false,
    encoding: 'utf8',
}, (eventType, filename) => {
    console.log(`${eventType}: ${filename}`);
});
