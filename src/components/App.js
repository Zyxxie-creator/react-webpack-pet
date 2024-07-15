import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Container text>
          <Menu secondary pointing>
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/dynamic">
              Dynamic Page
            </Menu.Item>
            <Menu.Item as={Link} to="/non-existent">
              No Match
            </Menu.Item>
          </Menu>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dynamic" element={<DynamicPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
