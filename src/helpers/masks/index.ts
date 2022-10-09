import maskRealId from './RealId';
import maskPhoneNumber from './PhoneNumber';
import maskZipCode from './ZipCode';

type Mask = "XXX.XXX.XXX-XX" | "XXXXX-XXX" | "(00) 00000-0000";
const ensureIsNotMasked = (stringValue: string, baseMask: Mask) => stringValue.substring(0, stringValue.length - 1).length !== baseMask.length;

export { ensureIsNotMasked, maskRealId, maskPhoneNumber, maskZipCode };