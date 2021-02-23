const mongoose = require("mongoose");

const balanceteSchema = new mongoose.Schema({
  companyID: String,
  data: Date,
  balanceSheet: [
    {
      i: Number,
      classification: Number,
      description: String,
      description_nd: String,
      initialcash: Number,
      debit: Number,
      credit: Number,
      finalcash: Number,
    },
  ],
});

module.exports = mongoose.model("Balancete", balanceteSchema);
