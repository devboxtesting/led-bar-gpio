let http = require("http").createServer(handler); //require http server, and create server with function handler()
let fs = require("fs"); //require filesystem module
let io = require("socket.io")(http); //require socket.io module and pass the http object (server)
let Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO
let LED04 = new Gpio(4, "out"),
  LED17 = new Gpio(17, "out"),
  LED27 = new Gpio(27, "out"),
  LED22 = new Gpio(22, "out"),
  LED18 = new Gpio(18, "out"),
  LED23 = new Gpio(23, "out"),
  LED24 = new Gpio(24, "out"),
  LED25 = new Gpio(25, "out"),
  LED12 = new Gpio(12, "out"),
  LED16 = new Gpio(16, "out");

let leds = [
  LED04,
  LED17,
  LED27,
  LED22,
  LED18,
  LED23,
  LED24,
  LED25,
  LED12,
  LED16,
];

http.listen(8080); //listen to port 8080

function handler(req, res) {
  //create server
  fs.readFile(__dirname + "/public/index.html", function (err, data) {
    //read file index.html in public folder
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" }); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" }); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on("connection", function (socket) {
  // WebSocket Connection

  socket.on("LED04", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED04.readSync()) {
      //only change LED if status has changed
      LED04.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED17", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED17.readSync()) {
      //only change LED if status has changed
      LED17.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED27", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED27.readSync()) {
      //only change LED if status has changed
      LED27.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED22", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED22.readSync()) {
      //only change LED if status has changed
      LED22.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED18", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED18.readSync()) {
      //only change LED if status has changed
      LED18.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED23", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED23.readSync()) {
      //only change LED if status has changed
      LED23.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED24", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED24.readSync()) {
      //only change LED if status has changed
      LED24.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED25", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED25.readSync()) {
      //only change LED if status has changed
      LED25.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED12", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED12.readSync()) {
      //only change LED if status has changed
      LED12.writeSync(lightvalue); //turn LED on or off
    }
  });
  socket.on("LED16", function (data) {
    let lightvalue = 0;
    //get light switch status from client
    lightvalue = data;
    if (lightvalue != LED16.readSync()) {
      //only change LED if status has changed
      LED16.writeSync(lightvalue); //turn LED on or off
    }
  });
});

process.on("SIGINT", function () {
  //on ctrl+c
  leds.writeSync(0); // Turn LED off
  leds.unexport(); // Unexport LED GPIO to free resources
  process.exit(); //exit completely
});
