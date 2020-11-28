import { WorldBankIndicator } from '../interfaces';

export default function searchIndicators(text:string, indicators: WorldBankIndicator[]): WorldBankIndicator[] {
    return indicators.filter(
        indicator=>[
            indicator.name,
            indicator.sourceNote,
            indicator.sourceOrganization
        ].some(string=>(string && string.toLowerCase().includes(text)))
    );
}

// import { WorldBankIndicator } from '../interfaces';
// import getIndicators from './getIndicators';

// let allIndicators: WorldBankIndicator[];

// export default async function searchIndicators(text:string, indicators: WorldBankIndicator[] = allIndicators): Promise<WorldBankIndicator[]> {
//     if (!allIndicators) {
//         allIndicators = await getIndicators();
//     }
//     return indicators.filter(
//             indicator=>[
//                 indicator.name,
//                 indicator.sourceNote,
//                 indicator.sourceOrganization
//             ].some(string=>(string && string.toLowerCase().includes(text)))
//     );
// }
