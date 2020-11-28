import { IndicatorsJson, WorldBankIndicator } from '../interfaces';


export default async function getIndicators(): Promise<WorldBankIndicator[]> {
    let indicatorsJson: IndicatorsJson;
    // @ts-ignore
    indicatorsJson = (await import('../indicators.json'));
    return indicatorsJson[1];
}
// try {
// } catch (e) {
// }
// "https://api.worldbank.org/v2/indicator?format=json&per_page=20000"
