import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const OPENF1_BASE_URL = 'https://api.openf1.org/v1';

// Endpoint to get session drivers
app.get('/api/drivers/:sessionKey', async (req, res) => {
  try {
    const response = await fetch(`${OPENF1_BASE_URL}/drivers?session_key=${req.params.sessionKey}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch driver data from OpenF1' });
  }
});

// Endpoint to get car telemetry data
app.get('/api/telemetry/:sessionKey/:driverNumber', async (req, res) => {
  const { sessionKey, driverNumber } = req.params;
  try {
    const response = await fetch(`${OPENF1_BASE_URL}/car_data?driver_number=${driverNumber}&session_key=${sessionKey}`);
    const data = await response.json();
    res.json(data.slice(0, 300));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch car data from OpenF1' });
  }
});

app.listen(PORT, () => console.log(`Telemetry ingestor running on http://localhost:${PORT}`));