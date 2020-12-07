import styled from 'styled-components';

export const Form = styled.form`
  background: #fa8072;
  padding: 30px;
  margin: 20px auto;
  max-width: 444px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:focus {
      border: 2px solid greenyellow;
    }
  }
  button {
    margin-top: 5px;
    border: 5px;
    height: 40px;
    width: 80px;
    background: rgb(17, 133, 88);
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductTable = styled.table`
  thead th {
    color: #4f4f4f;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`;
