export const globalCurrency = async () => {
  const fetchURL = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await fetchURL.json();
  return data;
};
