import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider } from 'semantic-ui-react';
const Layout = ({ children }) => {
    return (
        <Container>
            <Link to="/">
                <Header as="h1" >
                    Zyxxie's Pet's project!
                </Header>
            </Link>
            <body>
                <br></br> In this app I will familiarize myself with the basics of <b>Webpack</b> for React, <b>Babel</b> and strengthen my <b>React Router</b>, <b>React Fast Refresh</b> skills.
            </body>
            {children}
            <Divider />

        </Container>
    );
};
export default Layout;