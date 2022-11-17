import React, { useState } from "react";

interface user {
  nama: string;
  umur: number;
}

export default function Arai() {
  const [user, setUser] = useState<user[]>([{ nama: "dhio", umur: 19 }]);
  const [indexEdit, setIndexEdit] = useState<number>(0);
  const [nama, setNama] = useState<string>("");
  const [umur, setUmur] = useState<number>(0);

  function simpanData(e: React.FormEvent) {
    e.preventDefault();
    console.log("simpanData");
    let newUser = [...user];
    newUser[indexEdit]["nama"] = nama;
    newUser[indexEdit]["umur"] = umur;
    setUser(newUser);
  }

  function makeid(length: number, type: string) {
    var result = "";
    if (type == "number") {
      var characters = "0123456789";
    } else {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (type == "number") {
      return parseInt(result);
    } else {
      return result;
    }
  }

  function tambah() {
    console.log("tambah");
    const newUser: { nama: string; umur: number } = {
      nama: makeid(5, "string") as string,
      umur: makeid(2, "number") as number,
    };

    setUser((prev) => [...prev, newUser]);
  }

  function hapus(idx: number) {
    console.log("hapus");

    const newData = user.filter((f, index) => index != idx);
    setUser(newData);
  }

  return (
    <>
      <div>Arai</div>
      <button onClick={() => tambah()}>Tambah</button>
      {user.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={(e) => simpanData(e)} style={{ marginRight: "30px" }}>
            <div>Nama</div>
            <input
              required
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <br />
            <br />
            <div>Umur</div>
            <input
              required
              type="number"
              value={umur}
              onChange={(e) => setUmur(parseInt(e.target.value))}
            />
            <br />
            <br />
            <div>
              <button type="submit">Simpan</button>
            </div>
          </form>
          <table
            width={400}
            style={{
              textAlign: "left",
              marginTop: "20px",
              border: "1px solid",
            }}
          >
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Aksi</th>
            </tr>
            {user.map((data, index) => (
              <tr>
                {" "}
                <td>{index + 1}</td>
                <td>{data.nama}</td>
                <td>{data.umur}</td>
                <td>
                  <button
                    onClick={() => {
                      setIndexEdit(index);
                      setNama(data.nama);
                      setUmur(data.umur);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => hapus(index)}>Hapus</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </>
  );
}
