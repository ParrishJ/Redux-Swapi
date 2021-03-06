import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading...</h1>;
      // return something here to indicate that you are fetching data
    }
    if (this.props.error) {
      return <h1>{this.props.errorMsg}</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.isFetching,
  error: state.charsReducer.isError,
  errorMsg: state.charsReducer.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
