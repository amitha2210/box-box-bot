const API_URL =
  process.env.OPENF1_API_URL || "https://api.openf1.org/v1";

export async function getCarData(sessionKey, driverNumber) {
  const url = new URL(`${API_URL}/car_data`);

  url.searchParams.set("session_key", sessionKey);
  url.searchParams.set("driver_number", driverNumber);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`OpenF1 request failed: ${response.status}`);
  }

  return response.json();
}