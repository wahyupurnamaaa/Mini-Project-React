function DataPeserta({ name, email, alamat }) {
  return (
    <div className="card">
      <h1>Nama Saya Adalah {name}</h1>
      <hr />
      <p>{email}</p>
      <p>Beralamat di {alamat}</p>
    </div>
  );
}

export default DataPeserta;
