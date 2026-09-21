const BASE_URL = 'http://localhost:3001/api';

export async function getDrivers(sessionKey) {
  const res = await fetch(`${BASE_URL}/drivers/${sessionKey}`);
  if (!res.ok) throw new Error('Failed to fetch session drivers');
  return res.json();
}

export async function getTelemetry(sessionKey, driverNumber) {
  const res = await fetch(`${BASE_URL}/telemetry/${sessionKey}/${driverNumber}`);
  if (!res.ok) throw new Error('Failed to fetch car telemetry');
  return res.json();
}