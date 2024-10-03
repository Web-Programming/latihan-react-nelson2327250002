import React from "react";

function Product() {
    const products = [
        { id: "P001", nama: "Asus", harga: 1000000, deskripsi: "Laptop Asus yang ringan", foto: "url-to-asus-image" },
        { id: "P002", nama: "Acer", harga: 2000000, deskripsi: "Laptop Acer dengan performa tinggi", foto: "url-to-acer-image" },
        { id: "P003", nama: "Lenovo", harga: 3000000, deskripsi: "Laptop Lenovo yang tahan lama", foto: "url-to-lenovo-image" },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nama}</td>
                            <td>{product.harga}</td>
                            <td>{product.deskripsi}</td>
                            <td>
                                <img src={product.foto} alt={product.nama} style={{ width: "50px", height: "auto" }} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Product;
