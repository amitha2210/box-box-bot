import { useEffect, useState } from 'react';
import { getDrivers } from '@box-box-bot/api-client';
import React from 'react';

export default function App() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("App running")
  // Example OpenF1 Session Key
  const TEST_SESSION_KEY = 'latest';

  useEffect(() => {
    getDrivers(TEST_SESSION_KEY)
      .then((data) => setDrivers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Box-Box-Bot Dashboard</h1>
      {loading ? (
        <p>Fetching session data...</p>
      ) : (
        <div>
          <h2>Session Drivers</h2>
          <ul>
            {drivers.map((driver) => (
              <li key={driver.driver_number}>
                #{driver.driver_number} - {driver.full_name} ({driver.team_name})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}