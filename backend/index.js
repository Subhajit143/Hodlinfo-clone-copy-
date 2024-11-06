import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";
import { Ticker } from "./models/data.js";
import axios from "axios";
import cors from "cors"

const app = express();

const corsOrigin={
  origin:"http://localhost:5174",
  methods:"GET,POST,PUT,DELETE,OPTIONS,PATCH",
  credentials:true,
}
app.use(cors(corsOrigin))

app.use(express.json());
dotenv.config({
  path: "./.env",
});
connectDb();

app.get("/fetch-ticker", async (req, res) => {
    try {
        console.log('Fetching data from WazirX API...'); // Log for debugging
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    
        console.log('Data fetched:', response.data); // Log fetched data
    
        const tickers = Object.values(response.data).slice(0, 10);
        
        console.log('Top 10 tickers:', tickers); // Log top 10 tickers
    
        // Clear existing data from the database
        await Ticker.deleteMany({});
        
        // Prepare the data to be saved
        const tickerDocuments = tickers.map((ticker) => ({
          name: ticker.name,
          last: parseFloat(ticker.last), // Convert to number
          buy: parseFloat(ticker.buy),   // Convert to number
          sell: parseFloat(ticker.sell), // Convert to number
          volume: parseFloat(ticker.volume), // Convert to number
          base_unit: ticker.base_unit
        }));
    
        console.log('Ticker documents to insert:', tickerDocuments); // Log documents to insert
    
        // Insert new data into the database
        await Ticker.insertMany(tickerDocuments);
        
        console.log('Data stored successfully'); // Log success
        res.send('Data fetched and stored successfully');
      } catch (error) {
        console.error('Error fetching or storing data:', error);
        res.status(500).send('Error fetching data');
      }
    
});


// Route to Get Stored Data from MongoDB
app.get("/api/tickers", async (req, res) => {
  try {
    const tickers = await Ticker.find();
    res.json(tickers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving data");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
