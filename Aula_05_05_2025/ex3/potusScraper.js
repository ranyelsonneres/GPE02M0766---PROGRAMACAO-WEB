const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


rp(url)
  .then(function(html) {

    const $ = cheerio.load(html);
    

    const presidents = [];


    $('table.wikitable tbody tr').each((index, element) => {
      const name = $(element).find('td b a').text();
      const term = $(element).find('td').last().text().trim();
      

      if (name) {
        presidents.push({
          name: name,
          term: term
        });
      }
    });


    const csvHeader = 'Name,Term\n';
    const csvRows = presidents.map(president => `${president.name},${president.term}`).join('\n');
    
    const csvContent = csvHeader + csvRows;


    fs.writeFile('presidents.csv', csvContent, (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo CSV:', err);
      } else {
        console.log('Arquivo CSV criado com sucesso!');
      }
    });
  })
  .catch(function(err) {
    console.error('Erro ao obter a página:', err);
  });
