const Balancete = require("./models/Balancete");
var removeDiacritics = require("diacritics").remove; //Pacote que deixa a String sem Diacritics

let balanceteMetodo = {
  import: (balanceteSheet, data, companyID) => {
    let balanceSheet = [];

    function convertFloat(string) {
      string = parseFloat(
        string
          .trim()
          .replace(/([^\d,])+/gim, "")
          .replace(",", ".")
      );
      return string;
    }

    function clearClassifier(string) {
      string = string.replace(/\d*$/gim, "").trim();
      return string;
    }

    function extract(str) {
      const regex = /^(\s*[\d.,]*\s*(\d{10})?)((\D*)(\d{7}[-]\d{1})?)((\s*[\d.,DC]*[\s*DC]?)[\D]?)(\s*[\d.,DC]*[\s*DC]?)(\s*[\d.,DC]*[\s*DC]?)((\s*[\d.,DC]*[\s*DC]?)[\D]?)/gm;
      let m;
      let i = 0,
        description,
        classifier,
        initialcash,
        debit,
        credit,
        finalcash;

      while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
          groupIndex == 1
            ? (classifier = convertFloat(clearClassifier(match)))
            : 0;

          groupIndex == 3 ? (description = match.trim()) : 0;
          groupIndex == 6 ? (initialcash = convertFloat(match)) : 0;
          groupIndex == 8 ? (debit = convertFloat(match)) : 0;
          groupIndex == 9 ? (credit = convertFloat(match)) : 0;
          groupIndex == 11 ? (finalcash = convertFloat(match)) : 0;
        });

        balanceSheet.push({
          i: i++,
          classification: classifier,
          description,
          description_nd: removeDiacritics(description),
          initialcash,
          debit,
          credit,
          finalcash,
        });
      }

      return balanceSheet;
    }

    let balancete = {
      companyID: companyID,
      data: data,
      balanceSheet: extract(balanceteSheet),
    };

    Balancete.create(balancete);
  },
};

module.exports = balanceteMetodo;
