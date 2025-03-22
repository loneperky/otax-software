// src/analytics.js
import ReactGA from "react-ga4";

const initializeAnalytics = () => {
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your Measurement ID
};

export default initializeAnalytics;
