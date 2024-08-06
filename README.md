# Weatherico, Weather Forecast System

Weatherico is an online platform that provides real-time weather updates from sensors and allows users to set personalized alerts for specific weather conditions like temperature, and rainfall, ensuring timely notifications when these thresholds are exceeded.

**Technologies Used**:
HTML - CSS - JavaScript - NodeJs - Arduino IDE - HiveMQ Cloud - ESP8266 (WiFi Module) - BMP280 (Temperatrue and Pressure sensor) - LM393 (Raindrop sensor)

![PHOTO-2024-08-06-14-56-50](https://github.com/user-attachments/assets/d6f25cd9-e3ee-4f46-ac9b-b87f9bcb10b7)

## Key Features:

### 1. Home Page:

The "Weatherico" homepage provides:

- A greeting message welcoming users to the site.
  
- A "Check Weather" button that allows users to access detailed real-time weather readings including temperature, pressure, and rainfall, categorized from no rain to heavy rain.
  
- Localization functionality, displaying the current location as Alexandria, Egypt, which suggests real-time geographical weather tracking.

<img width="1440" alt="Screenshot 2024-08-06 at 1 31 13 PM" src="https://github.com/user-attachments/assets/6d76bbd6-6944-44a9-bc1e-498f19dcc424">

### 2. Alerts Page:

This page allows users to customize weather alerts. It provides them with the ability to set specific conditions under which they would like to receive notifications:

- Temperature Alert: Users can input a temperature threshold to receive alerts when the ambient temperature reaches or exceeds this value.
  
- Rainfall Alert: There are options to receive notifications based on different intensities of rainfall, including heavy rain, moderate rain, light rain, or no rain.
  
- Confirmation Button: A "Confirm" button allows users to save their alert preferences.

- Alert Display Area: A designated area labeled "NO ALERT" is shown where notification messages will appear when the set conditions are met, ensuring users are promptly informed of 
  relevant weather changes.
  
<img width="1440" alt="Screenshot 2024-08-06 at 1 40 15 PM" src="https://github.com/user-attachments/assets/87cf34f9-8f17-40fa-8498-c9b2236eaa09">

## Technical Aspects:

- HTML, CSS, JavaScript: These form the foundation of the web interface, where HTML structures the content, CSS styles it, and JavaScript adds interactivity.

- Node.js: This is used to build scalable, server-side network applications. It interacts with sensors, databases, and other backend services.

- Arduino IDE: Utilized to program microcontrollers (like the ESP8266) for reading sensor data and handling device operations.

- HiveMQ Cloud: Acts as a broker for MQTT, a messaging protocol for the Internet of Things. It enables efficient and real-time communication between devices and the server.

- ESP8266 (WiFi Module): Provides internet connectivity to the microcontroller, enabling it to send and receive data from the web or MQTT server.

- BMP280 (Temperature and Pressure Sensor): Measures atmospheric temperature and pressure. These readings can be used to predict weather conditions.

- LM393 (Raindrop Sensor): Detects raindrop presence, allowing the system to alert users about potential rainfall.
