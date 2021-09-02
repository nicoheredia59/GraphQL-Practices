import { gql, useQuery } from "@apollo/client";
import client from "../client";

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((res) => console.log(res));

const EXCHANGE_RATES = gql`
  query GetExchanceRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const Rates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => {
    return (
      <div key={currency}>
        <p>
          {currency} : {rate}
        </p>
      </div>
    );
  });
};

export default Rates;
