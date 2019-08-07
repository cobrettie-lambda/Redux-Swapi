import React from "react";
import { connect } from "react-redux";
import { fetchCharacter } from '../actions/index';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacter()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
  }
}

const mapDispatchToProps = {
  fetchCharacter: fetchCharacter
}

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(CharacterListView);
