import { z } from 'zod';

// Schema for water level data
const waterLevelSchema = z.object({
    timestamp: z.string(),
    value: z.number(),
    stateMnwMhw: z.string(),
    stateNswHsw: z.string()
});

// fetch for the current water level
export async function fetchCurrentWaterLevel() {
    const response = await fetch('https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KONSTANZ/W/currentmeasurement.json');
    const waterLevelData = await response.json();
    return waterLevelSchema.parse(waterLevelData);
}