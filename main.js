//console.log("Hola mundo");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr. | Lic. Enseñansas de las Matemáticas')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Maestra de Matemáticas')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString('<strong>Matemáticas</strong>')
    .pauseFor(2500)
    .start();