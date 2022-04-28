const messages = [

    "oscar",
    "Ana",
    "Nicolay",
    "Jessica",
    "Diego",
    "laura",
    "Carolina",
    "Paulina"
];

const randomMsg = () => {

    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg }