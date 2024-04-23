const express = require("express" ) ;

const app  = express();

const PORT =  2000 ;

// const userData = require("./MOCK_DATA.json") ;

app.use(express.json()) ;




app.post("/photos_event", async(req,res) => {
    console.log(req.body)
})
const UserType =  new GraphQLObjectType({
    name: "User" ,
    fields: () => ({

    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType" ,
    fields: {
        getAllUser
        getUserByID
    }
})
const Mutation = 'mutation'

const schema = new GraphQLSchema({query: RootQuery , mutation: Mutation})

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) ;
}) ;