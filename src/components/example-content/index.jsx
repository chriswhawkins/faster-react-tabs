import React from 'react';

const ExampleContent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div className='example-content'>
        {this.props.text}
        <img src={this.props.image} alt='I’m an image' />
      </div>
    );
  }
});

export default ExampleContent;
