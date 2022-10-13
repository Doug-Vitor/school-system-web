import BaseMask from './types';

import { regex as realIdRegex, applyMask as maskRealId } from './RealId';
import { regex as phoneNumberRegex, applyMask as maskPhoneNumber } from './PhoneNumber';
import { regex as zipCodeRegex, applyMask as maskZipCode } from './ZipCode';

const ensureIsMasked = (stringValue: string, baseMask: BaseMask) => { 
    switch (baseMask) {
        case 'XXX.XXX.XXX-XX': return stringValue.match(realIdRegex) !== null;
        case '(00) 00000-0000': return stringValue.match(phoneNumberRegex) !== null;
        case 'XXXXX-XXX': return stringValue.match(zipCodeRegex) !== null;
    }
}

const ensureIsNotMaskedAfterDigit = (stringValue: string, baseMask: BaseMask) =>
    stringValue.substring(0, stringValue.length - 1).length !== baseMask.length;

export { ensureIsMasked, ensureIsNotMaskedAfterDigit, maskRealId, maskPhoneNumber, maskZipCode };