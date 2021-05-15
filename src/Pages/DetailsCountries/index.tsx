import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import {useHistory} from "react-router-dom" ;

// const API_BASE_URL = "https://countries.trevorblades.com/";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: API_BASE_URL,
// });


const DETAILS_COUNTRIES = gql`
  {
    country(code: "BR") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
  }
`;

declare interface IDetailsCountry {}

const DetailsCountries: React.FC<IDetailsCountry> =(props) =>{
   

    const { data, loading, error } = useQuery(DETAILS_COUNTRIES);
    //const [country, setCountry] = useState<Array<any>>([]);
    

    useEffect(() => {
        if (data) {
          console.log(data.country);
          //setCountry(data.country);
        }
      }, [data]);

    return(
        <div>
           
        </div>
    );
}
export default DetailsCountries;