import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as testActions from './actions/testActions';
import { Table } from 'react-bootstrap';
import './App.css';
import { Header } from './Header'
class App extends Component {

  constructor(props) {
    super(props);

    this.handleLoadData = this.handleLoadData.bind(this);
  }

  // static propTypes = {
  //   sameer: PropTypes.object,
  //   actions: PropTypes.object.isRequired 
  // }

  componentWillMount = () => {
    const { actions } = this.props;
    const testData = actions.test.getTestObjectsAction();
    const data = this.props.sameer.test.testGrid;
  }

  handleLoadData() {
    this.props.actions.test.getTestObjectsAction();
  }

  render() {

    const { actions } = this.props;
    let data = [];
    // if (actions && actions.test) {
    //   data = actions.test.getTestObjectsAction();
    // }
    //data = this.props.sameer.test.testGrid;
    const placeholderData = data ? data : null;
    // const gridData = placeholderData.map(s => {
    //   return s;
    // });
    return (
      <div className="App">
        <div className="container">
          {/* <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{gridData.id}</td>
                <td>{gridData.title}</td>
                <td>{gridData.body}</td>
              </tr>
            </tbody>
          </Table> */}
          <Header/>
          <div>Sameer</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return ({ sameer: state.sameer });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    actions: {
      test: bindActionCreators(testActions, dispatch)
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
