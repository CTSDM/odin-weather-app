const BASE_URL_FLAG = 'https://flagsapi.com/'
const STYLE = 'flat';
const SIZE = 64;
const BASE_URL_CODE = 'https://restcountries.com/v3.1/name/'


export default async function getCountryFlagSrc(country) {
    const countryInfoResponse = await fetch(`${BASE_URL_CODE}${country}`,
        { mode: 'cors' }
    );
    const countryInfo = await countryInfoResponse.json();
    const countryCode = countryInfo[0].cca2;
    return `${BASE_URL_FLAG}/${countryCode}/${STYLE}/${SIZE}.png`
}
