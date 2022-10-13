const regex = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/;
const getMaskFromRegex = (_: string, first: string, second: string, third: string, last: string) => `${first}.${second}.${third}-${last}`;

const applyMask = (realId: string) => realId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, getMaskFromRegex);
export { regex, applyMask }