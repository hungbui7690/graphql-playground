/*
  Intro
  - Query Language
  - Alternative to REST APIs


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  REST APIs:
  - pokemonsite.com/api/pokemon
  - pokemonsite.com/api/pokemon/123
  
  Over Fetching
  - getting back more data than we need 
  - /api/courses
    -> [
        {id: 1, name: "...", author: {...}, price: 100, thumbnail: "...", video_url: "..."},
        {id: 2, name: "...", author: {...}, price: 100, thumbnail: "...", video_url: "..."},
        {id: 3, name: "...", author: {...}, price: 100, thumbnail: "...", video_url: "..."}
        ...
      ]

  Under Fetching
  - getting back less data than we need
  - /api/courses/1
    -> {id: 1, name: "...", author: {...}, price: 100, thumbnail: "...", video_url: "..."}
    -> we want more info of the author -> like author info and courses under that author, etc.. 
  - so that we need to make additional request to get more info of the author
    -> /api/author/1


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  GraphQL
  - single endpoint
    -> mysite.com/graphql

    Query{
      courses{
        id
        name
        price
        author{
          <id>
          <name>
          <email>
          <courses>{
            id
            name
            price
            thumbnail
            video_url
          }
        }
      }
    }


*/
