export default function formatMoney(numberP, decPlacesP = 2, decSepP, thouSepP) {
  const decPlacesPP = Math.abs(decPlacesP);
  // eslint-disable-next-line no-restricted-globals
  const decPlaces = isNaN(decPlacesPP) ? 2 : decPlacesPP;
  const decSep = typeof decSepP === 'undefined' ? '.' : decSepP;
  const thouSep = typeof thouSepP === 'undefined' ? ',' : thouSepP;
  const sign = numberP < 0 ? '-' : '';
  const number = Math.abs(Number(numberP) || 0).toFixed(decPlaces);
  const i = String(parseInt(number, 10));
  const jP = i.length;
  const j = (jP) > 3 ? jP % 3 : 0;

  return sign
        + (j ? i.substr(0, j) + thouSep : '')
        + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, `$1${thouSep}`)
        + (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : '');
}
