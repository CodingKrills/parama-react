import React, { Component } from 'react'


import axios from 'axios';

export default class GetCatagory extends Component {


    state = {
        result: []
    }

    componentDidMount() {
        axios.get('http://www.api.paramafashion.com/api/get_all_main_catagory')
          .then(res => {
            const result = res.data;
            this.setState({ result });
          })
      }


    render() {
        return (
            <div>
                <ul>
                    {this.state.result.map(result => <li key={result._id}>{result.catagory_name}</li>)}
                </ul>
            </div>
        )
    }
}
