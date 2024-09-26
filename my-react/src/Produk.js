import React from "react";

function Produk() {
    const produks = [
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
                {produks.length > 0 && produks.map((produk) => {
                    return (
                        <tr key={produk.id}>
                            <td>{produk.id}</td>
                            <td>{produk.nama}</td>
                            <td>{produk.harga}</td>
                            <td>{produk.deskripsi}</td>
                            <td>
                                <img src={produk.foto} alt={produk.nama} style={{ width: "50px", height: "auto" }} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Produk;
