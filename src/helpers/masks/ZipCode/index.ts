const regex = /(\d{5})-(\d{3})/;
const getMaskFromRegex = (_: string, prefix: string, sufix: string) => prefix + '-' + sufix;

const applyMask = (realId: string) => realId.replace(/(\d{5})(\d{3})/, getMaskFromRegex);
export { regex, applyMask }