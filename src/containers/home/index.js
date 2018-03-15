import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadData
} from '../../modules/user';

class Home extends Component {
  componentDidMount(){
    loadData(this.props.dispatch)
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h1>User List Api-</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
          {this.props.user_list ? this.props.user_list.map(user => {
            return (
              <tr>
                <th scope="row">{user.name.title}</th>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
              </tr> 
            )   
          }) : 'Loading...'}
          </tbody>
        </table>
        <p>
          <button className="btn btn-secondary" onClick={() => this.props.changePage()}>
            Go to about page via redux(push)
          </button>
        </p>
      </div>
    )
  }    
};

const mapStateToProps = state => ({
  user_list: state.user.user_list,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatch,
      changePage: () => push('/about'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
