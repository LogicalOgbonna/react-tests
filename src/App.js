import React from 'react';
import Header from './component/header/header';
import "./App.scss";
import Headline from './component/headline/headline';
import Button from './component/button/button';
import ListItem from './component/list-item/list-item';
import { connect } from 'react-redux';
import { fetchPost } from './actions';
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click to render Posts" />
        <Button />
        <ListItem />
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPost })(App);
