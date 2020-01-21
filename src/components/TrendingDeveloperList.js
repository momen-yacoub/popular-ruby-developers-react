import React, { Component } from 'react'
import axios from 'axios'

class TrendingDeveloperList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    axios.get('https://popular-ruby-developers.herokuapp.com/api/trending_developers/list')
      .then(response => {
        this.setState({list: response.data.list})
      })
  }

  render() {
    const { list } = this.state
    return (
        <div>
            {list.length === 0 && (
                <div className="text-center">
                    <h2>No developers found at the moment</h2>
                </div>
            )}
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" colSpan="4"> User Information </th>
                                <th scope="col" colSpan="2"> Repo </th>
                            </tr>
                            <tr>
                              <th scope="col" colSpan="2">User Name</th>
                              <th scope="col">Name</th>
                              <th scope="col">Type</th>
                              <th scope="col">Name</th>
                              <th scope="col">description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.map(developer =>
                                <tr key={developer.username}>
                                    <td><img src={developer.avatar} alt="" border="3" height="100" width="100"></img></td>

                                    <td>{developer.username}</td>
                                    <td>{developer.name}</td>
                                    <td>{developer.type}</td>
                                    <td><a href={developer.repo.url}>{developer.repo.name}</a></td>
                                    <td>{developer.repo.description}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

export default TrendingDeveloperList;
