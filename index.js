
const buzzphrase = require('buzzphrase');

console.log("we are building " + buzzphrase.get());

console.log(
    buzzphrase.get({
        format: "{i} {a} {n} {f}",
    })
);

buzzphrase.log({ iterations: 2 });
