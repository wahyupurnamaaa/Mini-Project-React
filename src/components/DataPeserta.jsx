import "./DataPeserta.css";

function DataPeserta({ name, email, alamat }) {
  return (
    <div className="card-peserta">
      <h1>Nama Saya Adalah {name}</h1>
      <hr />
      <p>{email}</p>
      <p>Beralamat di {alamat}</p>
    </div>
  );
}

export default DataPeserta;
