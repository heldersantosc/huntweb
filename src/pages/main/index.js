import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        produtos: [],
        produtoInfo: [],
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get("/produtos/");
        const { docs, ...produtoInfo } = response.data;
        this.setState({ produtos: response.data, page });
    };

    prevPage = () => {
        const { page, produtoInfo } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page, produtoInfo } = this.state;
        if (page === produtoInfo.page) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render() {
        const { produtos } = this.state;
        return (
            <div className="product-list">
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
                {produtos.map(produtos => (
                    <article key={produtos.id}>
                        <strong> {produtos.tipo}</strong>
                        <p> {produtos.titulo}</p>
                        <a href={produtos.id}> Detalhes </a>
                    </article>
                ))}

            </div>
        );
    }
}