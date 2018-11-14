const graphql = require('graphql');
const Employee = require('../models/employee');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = graphql;

const EmployeeType = new GraphQLObjectType({
  name:'Employee',
  fields:()=>({
    id:{ type: GraphQLID },
    company: { type: GraphQLString},
    last_name: { type: GraphQLString},
    first_name: { type: GraphQLString},
    email_address: {type: GraphQLString},
    job_title: { type: GraphQLString},
    bussiness_phone: { type: GraphQLString},
    home_phone: {type: GraphQLString},
    mobile_phone: {type: GraphQLString},
    fax_number: { type: GraphQLString},
    address: { type: GraphQLString},
    city: {type: GraphQLString},
    state_province: {type: GraphQLString},
    zip_postal_code: { type: GraphQLString},
    contry_region: {type: GraphQLString},
    notes: {type: GraphQLString},
  })
});

const GetEmployees = {
  type: new GraphQLList(EmployeeType),
  resolve(parent, args){
    return Employee.find({});
  }
};

const GetEmployee = {
  type: EmployeeType,
  args:{id: {type: GraphQLID}},
  resolve(parent, args){
    return Employee.findById(args.id);
  }
}

const CreateEmployee = {
  type: EmployeeType,
  args:{
    last_name: {type: new GraphQLNonNull(GraphQLString)},
    first_name: {type: new GraphQLNonNull(GraphQLString)},
    email_address: {type: new GraphQLNonNull(GraphQLString)},
    company: {type: GraphQLString},
    job_title: {type: GraphQLString},
    bussiness_phone: {type: GraphQLString},
    home_phone: {type: GraphQLString},
    mobile_phone: {type: GraphQLString},
    fax_number: {type: GraphQLString},
    address: {type: GraphQLString},
    city: {type: GraphQLString},
    state_province: {type: GraphQLString},
    zip_postal_code: {type: GraphQLString},
    contry_region:{type: GraphQLString},
    notes: {type: GraphQLString},
  },
  resolve(parent, args)
  {
    let employee = new Employee({
      last_name: args.last_name,
      first_name: args.first_name,
      email_address: args.email_address,
      company: args.company,
      job_title: args.job_title,
      bussiness_phone: args.bussiness_phone,
      home_phone: args.home_phone,
      mobile_phone: args.mobile_phone,
      fax_number: args.fax_number,
      address: args.address,
      city: args.city,
      state_province: args.state_province,
      zip_postal_code: args.zip_postal_code,
      contry_region: args.contry_region,
      notes: args.notes,
    });

    return employee.save();
  }
}

module.exports = ({
  EmployeeType: EmployeeType,
  GetEmployees: GetEmployees,
  GetEmployee: GetEmployee,
  CreateEmployee: CreateEmployee
});
