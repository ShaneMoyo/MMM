import React, { Component } from 'react';
import {
  Card,
  MediaLeft,
  Image,
  MediaContent,
  CardImage,
  Icon,
  CardHeaderIcon,
  CardHeaderTitle,
  CardHeader,
  CardContent,
  Media,
  Title,
  Subtitle,
  Content
} from 'bloomer'

class Carde extends Component {

  render(){
    return(
      <div>
        <Card>
          <CardHeader>
            <CardHeaderTitle>
              Card Title
            </CardHeaderTitle>
          </CardHeader>
          <CardImage>
            <Image isRatio='4:3' src='https://unsplash.it/1200/900?random' />
          </CardImage>
          <CardContent>
            <Content>
              Card information blah blah blah.
              <br/>
              <small>11:09 PM - 36 October 20125</small>
            </Content>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Carde;