/*
  Query Basics
  - query <QueryName>{
      <Resource>
    }


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Example: 
  - query ReviewsQuery{
      reviews{

      }
    }

  - query{
      albums{
        data{
          id, 
          title
        }
      }
    }


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Models: Games / Reviews / Authors
  - with graphql, we can traverse through the models easily

  - query {
      reviews{
        rating
        <author>{
          name
        }
      }
    }


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Query Params
  - query {
      game(id: "2"){
        title
      }
    }

  - query {
      game(id: "2"){
        title
        <reviews>{
          rating
          <author> {
            name
          }
        }
      }
    }




*/
