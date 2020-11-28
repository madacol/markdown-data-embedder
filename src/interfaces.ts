export type WorldBankIndicator = {
    id: string,
    name:string,
    unit: string,
    source: {id: string, value: string},
    sourceNote:string,
    sourceOrganization:string
    topics: Array<{id: string, value: string}>,
};
export type WorldBankApiMetadata = {
    page: number,
    pages: number,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    per_page: number,
    total: number,
    sourceid: string,
    lastupdated: string,
};
export type IndicatorsJson = [
    WorldBankApiMetadata,
    WorldBankIndicator[],
];
export type IndicatorData = any;
