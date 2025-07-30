const path=require('path')


const express=require('express')
const app=express()


const {graphqlHTTP}=require('express-graphql')
const {makeExecutableSchema}=require('@graphql-tools/schema')
const {loadFilesSync}=require('@graphql-tools/load-files')


const typesArray=loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolversArray=loadFilesSync(path.join(__dirname,'**/*.resolver.js'));

//console.log(typesArray)
//console.log(typesArray[0].definitions)
const schema=makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    });



app.use('/graphql',graphqlHTTP({
    schema:schema,  
    graphiql:true
}));

app.listen(3000,()=>{
    console.log("Running grphql server...");
})