import React, { Component } from 'react';
import { Box, Content } from 'bloomer';

class Home extends Component { 
  render(){
    return(
      <div>
        <Content isSize="large" style={{ backgroundColor: 'red', backgroundImage: 'url("http://brandmark.io/logo-rank/random/beats.png")' }}>
          <Box>Home Box</Box>
        </Content>
      </div>
    );
  }
}

export default Home; 