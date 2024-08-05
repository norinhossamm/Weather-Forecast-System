//constants
const express = require('express');
const http = require('http');

const mqtt = require('mqtt');
const socketIO = require('socket.io');
//const nodemailer = require('nodemailer');
//const bodyParser = require('body-parser');
const app = express();

const server = http.createServer(app);

//MQTT setup
const mqttOptions = 
{
  host: '3535ec71df1646cd967e81d12671da4c.s2.eu.hivemq.cloud',
  port: 8883,
  protocol: 'mqtts',
  username: 'Abasiery',
  password: 'Abasiery123',
};

const client = mqtt.connect(mqttOptions); //establish connection to a MQTT broker using MQTT library 

const io = require('socket.io')(server);

//serve static files from the public directory
app.use(express.static(__dirname +'\\WeatherForecast')); //uses express, looks in the public folder


//listens for connect, once connected to broker it prints connected and subscribes to topic called test
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('my/test/topic');
});

//listens if new message came, to execute body of this function
client.on('message', (topic, message) => 
{
    const sensorData = JSON.parse(message.toString()); //converting the message payload to a string and then parsing it as JSON to create a JavaScript object
    console.log('Received message:', topic, sensorData); //prints sensor data and topic

    io.emit('update', sensorData); //emits update event using socketio, and sensordata is sent with this event
    console.log("Updated!")
});

//serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname +'\\WeatherForecast\\index.html'); //sends the content of html file as response [main page of web application]
});

app.get('/', (req, res) => {
    // Read the contents of the first HTML file
    const htmlFile1 = fs.readFileSync(__dirname +'\\WeatherForecast\\index.html', 'utf8');
  
    // Read the contents of the second HTML file
    const htmlFile2 = fs.readFileSync(__dirname +'\\WeatherForecast\\alerts.html', 'utf8');
  
    // Send both HTML contents to the JavaScript file
    res.send(`<script>${htmlFile1}</script><script>${htmlFile2}</script>`);

  });

//listens for when a client connects / disconnects from the server
io.on('connection', (socket) => 
{
    console.log('Client connected');

    // Handle disconnect
    socket.on('disconnect', () => 
    {
        console.log('Client disconnected');
    });

    socket.on('publishAlert', (message) => {
        // Publish the alert to the MQTT topic
        client.publish('my/test/receive', message);
        console.log('Alert published to MQTT:', message);
    });
});

//makes server listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

