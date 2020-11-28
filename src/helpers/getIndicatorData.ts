import { IndicatorData } from "../interfaces";
import fetch from "node-fetch";

export default async function getIndicatorData(indicator: string, country: string = 'all'): Promise<IndicatorData> {
    const response = await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&per_page=1000`);
    const data = await response.json();
    return data[1];
}