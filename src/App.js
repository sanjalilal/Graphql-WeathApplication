import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from "@apollo/client";
import Home from './pages/Home';

function App() {

  const client = new ApolloClient({
    cache : new InMemoryCache(),
    uri : "https://graphql-weather-api.herokuapp.com/"
  });

  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
