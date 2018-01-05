import React, { Component } from 'react';
import { Box } from 'bloomer';

class Minerals extends Component { 
  render(){
    return(
      <div> 
        <Box>Minerals Box</Box>
        <Hero isColor='info' isSize='medium'>
          <HeroHeader>
            <Nav>
              <NavLeft>
                <NavItem isBrand>Bloomer</NavItem>
              </NavLeft>
              <NavCenter>
                <NavItem>
                <Icon>
                    <span className="fa fa-github" aria-hidden="true" />
                </Icon>
            </NavItem>
            <NavItem>
                <Icon>
                    <span className="fa fa-twitter" aria-hidden="true" />
                </Icon>
            </NavItem>
        </NavCenter>
        <NavRight isMenu>
            <NavItem>Home</NavItem>
            <NavItem>Documentation</NavItem>
        </NavRight>
    </Nav>
</HeroHeader>

<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>Title</Title>
    </Container>
</HeroBody>

<HeroFooter>
    <Tabs isBoxed isFullWidth>
        <Container>
            <TabList>
                <Tab isActive><TabLink>Overview</TabLink></Tab>
                <Tab><TabLink>Grid</TabLink></Tab>
                <Tab><TabLink>Element</TabLink></Tab>
                <Tab><TabLink>Components</TabLink></Tab>
                <Tab><TabLink>Layout</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
</HeroFooter>
</Hero>
      </div>
    );
  }
}

export default Minerals; 