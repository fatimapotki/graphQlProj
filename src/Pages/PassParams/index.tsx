import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { useParams} from "react-router-dom" ;


interface Language  {
  code: number;
  name: string ;
  native: string
 
}

interface Country  { 
    code: number ; 
    name: string ;
    native: string ;
    capital: string ;
    currency: string ;
    emoji: string ;
    languages: Array<Language> ;
  }

const DETAILS_COUNTRIES = gql`
query Country ($code: ID!) {
    country(code: $code) {
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
      countries {
        name
        code
      }
}    
`;

declare interface IPassParams{}

const PassParams: React.FC <IPassParams> = (props) => {  
    const {code} =useParams();    
    const { data, loading, error} = useQuery(DETAILS_COUNTRIES, {variables:{code:code}});
    const [country,setCountry] = useState(code);
   //const [country] = [data];
   // const {name: string,native,capital,emoji,currency,langages} = country;
   
    useEffect(() => {
        if (data) {
          console.log(data.country);
          setCountry(data.country);          
        }
      }, [data]);
      return(     
        <div>
          <span>         

          {`${country.name}`}  
          <br/>
          {`${country.native}`}
          <br/>
          {`${country.capital}`}  
          <br/>
          {`${country.currency}`}
          <br/>
          {`${country.emoji}`}
          <br/>
          {`${country.languages && country.languages.length !==0 ? country.languages[0].name : ""}`} 
          <br/>
          {`${country.languages && country.languages.length !==0 ? country.languages[0].code : ""}`} 
          </span>
        </div>             
      );
      
};


export default PassParams;