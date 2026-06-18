import {
  useState,
} from "react";

function Admin() {
  const [
    products,
    setProducts,
  ] = useState([]);

  const [
    name,
    setName,
  ] = useState("");

  const [
    price,
    setPrice,
  ] = useState("");

  const [
    editId,
    setEditId,
  ] = useState(null);

  const addProduct = () => {
    if (
      !name ||
      !price
    )
      return;

    if (editId) {
      setProducts(
        products.map(p =>
          p.id === editId
            ? {
                ...p,
                name,
                price,
              }
            : p
        )
      );

      setEditId(null);
    } else {
      setProducts([
        ...products,
        {
          id:
            Date.now(),
          name,
          price,
        },
      ]);
    }

    setName("");
    setPrice("");
  };

  const deleteProduct =
    id => {
      setProducts(
        products.filter(
          p =>
            p.id !== id
        )
      );
    };

  const editProduct =
    product => {
      setName(
        product.name
      );

      setPrice(
        product.price
      );

      setEditId(
        product.id
      );
    };

  return (
    <div className="container">
      <h1>
        Product CRUD
      </h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e =>
          setName(
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e =>
          setPrice(
            e.target.value
          )
        }
      />

      <button
        onClick={
          addProduct
        }
      >
        {editId
          ? "Update"
          : "Add"}
      </button>

      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map(
            product => (
              <tr
                key={
                  product.id
                }
              >
                <td>
                  {
                    product.name
                  }
                </td>

                <td>
                  $
                  {
                    product.price
                  }
                </td>

                <td>
                  <button
                    onClick={() =>
                      editProduct(
                        product
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(
                        product.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;