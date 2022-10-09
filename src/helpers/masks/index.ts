import BaseMask from './types';

import maskRealId from './RealId';
import maskPhoneNumber from './PhoneNumber';
import maskZipCode from './ZipCode';

const ensureIsNotMasked = (stringValue: string, baseMask: BaseMask) => stringValue.substring(0, stringValue.length - 1).length !== baseMask.length;

export { ensureIsNotMasked, maskRealId, maskPhoneNumber, maskZipCode };