import React, { Component } from 'react';

class Article extends Component {

  render(){
    return(
      <div class="card article">
            <div class="card-content">
              <div class="media">
                
                <div class="media-content has-text-centered">
                  <p class="title article-title">Introducing a new feature for paid subscribers</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a href="#">@d</a> on October 7, 2017
                  </p>
                </div>
              </div>

            <div class="content article-body">
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                <h3 class="has-text-centered">Feugiat sed lectus vestibulum mattis.</h3>
                <p> Molestie ac feugiat sed lectus vestibulum. Feugiat sed lectus vestibulum mattis. Volutpat diam ut venenatis tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie at. Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.
                </p>
              </div>
            </div>
</div>
    );
  }
}

export default Article;