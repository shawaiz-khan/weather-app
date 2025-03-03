# **Weather App 🌤️**

Welcome to the **Weather App** – a modern, responsive application built with **React** and **Tailwind CSS**. This app provides real-time weather updates, daily and weekly forecasts, and includes both dark and light modes for an enhanced user experience.

## **Key Features**

- **Real-Time Weather**: Fetch and display current weather details for any location around the globe.
- **Daily & Weekly Forecasts**: Get weather predictions for the next few days to help you plan ahead.
- **Dark & Light Mode**: Toggle between light and dark themes to suit your preference.
- **Location-Based Weather**: Automatically fetch weather data based on your current location or search for any city.
- **Fast & Responsive**: The app is optimized for performance and works seamlessly across all devices.

## **Tech Stack**

- **React**: For building the interactive user interface.
- **Tailwind CSS**: For efficient styling and a clean, modern design.
- **Weather API**: Fetches accurate weather data from sources like [WeatherAPI](https://www.weatherapi.com/).

## **Getting Started**

### **Prerequisites**

- **Node.js** (version 14.x or later)
- **npm** or **yarn**

### **Steps to Run the Project Locally**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shawaiz-khan/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get your API Key:**
   - Sign up at [WeatherAPI](https://www.weatherapi.com/) to get a free API key.

4. **Create a `.env` file in the root directory:**

   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open the app in your browser:**
   - Visit `http://localhost:3000` to see the app in action.

## **Contributing**

Contributions are always welcome! If you have ideas or suggestions, feel free to fork the repository and submit a pull request.

## **License**

This project is licensed under the [MIT License](./LICENSE).

## **Future Enhancements**

- **Offline Support**: Allow the app to cache weather data for offline access.
- **Severe Weather Alerts**: Notify users of severe weather conditions.
- **Additional Forecast Details**: Add more detailed weather metrics and insights.
