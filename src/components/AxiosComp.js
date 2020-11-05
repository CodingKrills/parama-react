import React, { Component } from 'react'


import axios from 'axios';


export default class AxiosComp extends Component {


    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://www.api.paramafashion.com/api/get_main_banner')
          .then(res => {
            const persons = res.data;
            console.log(res)
            this.setState({ persons });
          })
      }


    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person => <li>{person._id}</li>)}
                </ul>
            </div>
        )
    }
}
