const fs = require('node:fs');

  const data = fs.readFileSync(
    'paranesi.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

    console.log(data.replaceAll(/\n/, " ", "POKOTYLO TARASIK"))
