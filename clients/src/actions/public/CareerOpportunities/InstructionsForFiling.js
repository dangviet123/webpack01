import * as Types from '../../../constants/public/CareerOpportunities/InstructionsForFiling';

export const ac_fetchInstructionsForFiling = () => ({
    type: Types.FETCH_INSTRUCTION_FOR_FILING
});

export const ac_fetchInstructionsForFilingSuccess = datas => ({
    type: Types.FETCH_INSTRUCTION_FOR_FILING_SUCCESS,
    payload: {
        datas
    }
});