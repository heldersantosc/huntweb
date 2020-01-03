import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/produtos/');
        console.log(response.data);
    };

    render(){
       return <h1>index do pages main</h1> 
    }
}