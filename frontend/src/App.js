import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route path="/cart/:id?">
              <CartScreen />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
