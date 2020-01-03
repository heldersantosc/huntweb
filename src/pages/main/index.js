import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        produtos: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/produtos/");
        this.setState({ produtos: response.data });
    };

    render() {
        const {produtos} = this.state;
        return (
            <div className="product-list">
                {produtos.map(produtos => (
                    <article key={produtos.id}>
                        <strong> {produtos.tipo}</strong>
                        <p> {produtos.titulo}</p>
                        <a href={produtos.id}> Detalhes </a>
                    </article>
                ))}
            </div>
        )

    }
}