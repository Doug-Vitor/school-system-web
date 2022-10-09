const getMaskFromRegex = (_: string, prefix: string, sufix: string) => prefix + '-' + sufix;
export default (realId: string) => realId.replace(/(\d{5})(\d{3})/, getMaskFromRegex);