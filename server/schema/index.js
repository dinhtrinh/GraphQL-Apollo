const graphql = require('graphql');
const employee = require('./employee');

const {
  GraphQLSchema,
  GraphQLObjectType
} = graphql;

const {
  GetEmployees,
  GetEmployee,
  CreateEmployee
} = employee;

const RootQuery = new GraphQLObjectType({
  name:'RootQuery',
  fields:{
    employees: GetEmployees,
    employee: GetEmployee
  }
});

const Mutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
    CreateEmployee: CreateEmployee
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
