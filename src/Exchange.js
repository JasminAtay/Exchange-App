import React, { Component } from 'react'
import axios from 'axios'

export default class Exchange extends Component {
    constructor(props){
        super(props)
        this.state = {
         rate : "",
         amount : "",
         total : "",
         base : "",
         currency : ""
        
        }
    }
    componentDidMount(){
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res =>{
            this.setState({rate: `res.data.rates.${this.state.currency}`})
        })
    }
    amountHandler = (e) => {
        this.setState({amount: e.target.value})
    }
    submitHandler = (e) =>{
        this.setState({
            total: this.state.rate*this.state.amount
        })
        e.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>CAD</option>
                    <option>TRY</option>
                    <option>GBP</option>
                    <option>UAH</option>
                    <option>CHF</option>
                </select>
                <input onChange={this.amountHandler}
                value={this.state.amount}
                type="number"/>
                <button type="submit">Exchange</button>
                <select></select>
                
            </form>
        )
    }
}
