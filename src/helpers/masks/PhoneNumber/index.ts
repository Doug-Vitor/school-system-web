const regex = /\((\d{2})\) (\d{5})-(\d{4})/;
const getMaskFromRegex = (_: string, area: string, prefix: string, sufix: string) => `(${area}) ${prefix}-${sufix}`;

const applyMask = (phoneNumber: string) => phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, getMaskFromRegex);
export { regex, applyMask }