import React from 'react';
import { FaArrowCircleRight, FaWindowClose } from 'react-icons/fa';

import { Form, ProductTable } from './styled';

export default function Forme() {
  const [name, setName] = React.useState('');
  const [quantidade, setQuantidade] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [total] = React.useState('');
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const json = localStorage.getItem('products');
    const loadProducts = JSON.parse(json);
    if (loadProducts) {
      setProducts(loadProducts);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(products);
    localStorage.setItem('products', json);
  }, [products]);

  function handleSubmit(event) {
    event.preventDefault();

    let formErrors = false;
    if (quantidade <= 0) {
      formErrors = true;
      alert('Quantidade deve ser maior que 0');
    }
    if (formErrors) return;
    setProducts([
      ...products,
      { id: products.length + 1, name, quantidade, preco, total },
    ]);
  }

  const handleDelete = async (e, id) => {
    e.persist();

    setProducts([...products.filter((product) => product.id !== id)]);
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="nome">
        Nome do Produto:
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="qtd">
        Quantidade:
        <input
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          type="number"
          placeholder="Quantidade"
        />
      </label>
      <label htmlFor="price">
        Preço.Un:
        <input
          type="number"
          placeholder="Preço Un"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </label>
      <button type="submit">
        <FaArrowCircleRight />
      </button>

      {products &&
        products.map((product) => (
          <ProductTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>PRODUTO</th>
                <th>QTD.ETQ</th>
                <th>PREÇO UN</th>
                <th>V.TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{product.id}</strong>
                </td>
                <td>
                  <strong>{product.name}</strong>
                </td>
                <td>
                  <strong>{product.quantidade}</strong>
                </td>
                <td>
                  <strong>{product.preco}</strong>
                </td>
                <td>
                  <strong>{product.quantidade * product.preco}</strong>
                </td>
                <td>
                  <FaWindowClose
                    size={16}
                    cursor="pointer"
                    onClick={(e) => handleDelete(e, product.id)}
                  />
                </td>
              </tr>
            </tbody>
          </ProductTable>
        ))}
    </Form>
  );
}
