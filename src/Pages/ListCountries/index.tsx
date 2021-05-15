import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import {useHistory,useParams} from "react-router-dom" ;


const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

declare interface IListCountries {}

const ListCountries: React.FC<IListCountries> = (props) => {

const {code} = useParams(); 
const history = useHistory();

const { data, loading, error } = useQuery(LIST_COUNTRIES);
const [items, setItems] = useState<Array<any>>([]);

  useEffect(() => {
    if (data) {
      console.log(data.countries); 
     setItems(data.countries);
    }
  }, [data]);

  return !loading ? (
    <div>
      
      <br/>
      {items.map((element) => {
        return (
          <>
            <a
              href="#/"
              onClick={(event) => {
                event.preventDefault();
                // Write your logic
                history.replace(`/passparams/${(element as any).code}`) ;                
              }}
            >{`${(element as any).name}`}</a>
            <br />
          </>
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ListCountries;

