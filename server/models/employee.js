const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  last_name: {
    type: String,
    required : true
  },
  first_name: {
    type: String,
    required : true
  },
  email_address: {
    type: String,
    required : true
  },
  job_title: String,
  bussiness_phone: String,
  home_phone: String,
  mobile_phone: String,
  fax_number: String,
  address: String,
  city: String,
  state_province: String,
  zip_postal_code: String,
  country_region:String,
  notes: String,
  company: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
