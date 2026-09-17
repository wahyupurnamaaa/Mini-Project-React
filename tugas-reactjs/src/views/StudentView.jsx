import { useEffect, useRef, useState } from "react";
import { getGrade } from "../utils/studentGrade";

const API = "https://backend.reactjssanbercode.my.id/api/student-scores";
const emptyForm = { name: "", course: "", score: "" };

async function request(path = "", options = {}) {
  const response = await fetch(`${API}${path}`, options);
  if (!response.ok) throw new Error(`Permintaan gagal (HTTP ${response.status}). Silakan coba lagi.`);
  if (options.method) return;
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error("Format data dari server tidak sesuai.");
  return data;
}

export default function StudentView() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);
  const mutationLock = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    request("", { signal: controller.signal })
      .then(setStudents)
      .catch((err) => { if (!controller.signal.aborted) setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  async function reload() {
    setLoading(true);
    setError("");
    try { setStudents(await request()); }
    catch (err) { setError(`Gagal memuat data. ${err.message}`); }
    finally { setLoading(false); }
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function mutate(path, options, success) {
    if (mutationLock.current) return;
    mutationLock.current = true;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await request(path, options);
      resetForm();
      setMessage(success);
      await reload();
    } catch (err) {
      setError(err.message);
    } finally {
      mutationLock.current = false;
      setBusy(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const payload = { name: form.name.trim(), course: form.course.trim(), score: Number(form.score) };
    if (!payload.name || !payload.course || form.score === "" || !Number.isFinite(payload.score) || payload.score < 0 || payload.score > 100) {
      setError("Isi nama dan mata kuliah, serta nilai antara 0 sampai 100.");
      return;
    }
    mutate(editingId === null ? "" : `/${encodeURIComponent(editingId)}`, {
      method: editingId === null ? "POST" : "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }, editingId === null ? "Data mahasiswa berhasil ditambahkan." : "Data mahasiswa berhasil diperbarui.");
  }

  function editStudent(student) {
    setEditingId(student.id);
    setForm({ name: student.name, course: student.course, score: String(student.score) });
    setError("");
    setMessage("");
    nameInput.current?.focus();
  }

  function deleteStudent(student) {
    if (window.confirm(`Hapus data ${student.name}?`)) {
      mutate(`/${encodeURIComponent(student.id)}`, { method: "DELETE" }, "Data mahasiswa berhasil dihapus.");
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-800">Data Nilai Mahasiswa</h1>
      <p className="mt-2 mb-6 text-gray-500">Kelola nama, mata kuliah, dan nilai mahasiswa.</p>
      {error && <div role="alert" className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error} <button type="button" onClick={reload} disabled={busy || loading} className="underline font-semibold disabled:opacity-50">Muat ulang</button></div>}
      {message && <p role="status" className="mb-4 rounded-lg bg-green-50 p-4 text-green-700">{message}</p>}
      <div className="overflow-x-auto rounded-lg border border-gray-200" aria-busy={loading}>
        <table className="table w-full text-sm">
          <caption className="sr-only">Daftar nilai mahasiswa</caption>
          <thead className="bg-gray-50 text-gray-600"><tr>{["No", "Nama", "Mata Kuliah", "Nilai", "Index Nilai", "Aksi"].map((label) => <th key={label} scope="col">{label}</th>)}</tr></thead>
          <tbody>
            {loading ? <tr><td colSpan={6} className="text-center py-8">Memuat data...</td></tr> : students.length === 0 ? <tr><td colSpan={6} className="text-center py-8">{error ? "Data belum dapat ditampilkan." : "Belum ada data mahasiswa."}</td></tr> : students.map((student, index) => (
              <tr key={student.id} className="border-b border-gray-100">
                <td>{index + 1}</td><td>{student.name}</td><td>{student.course}</td><td>{student.score}</td><td className="font-semibold">{getGrade(student.score)}</td>
                <td><div className="flex gap-2">
                  <button type="button" disabled={busy} onClick={() => editStudent(student)} aria-label={`Edit ${student.name}`} className="rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 disabled:opacity-50">Edit</button>
                  <button type="button" disabled={busy} onClick={() => deleteStudent(student)} aria-label={`Hapus ${student.name}`} className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50">Delete</button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <h2 className="text-lg font-semibold mb-5">{editingId === null ? "Tambah Mahasiswa" : "Edit Mahasiswa"}</h2>
        <fieldset disabled={busy || loading} className="space-y-5">
          <div><label htmlFor="student-name" className="block mb-1 text-gray-600">Nama</label><input ref={nameInput} id="student-name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Masukkan nama" className="w-full rounded border border-gray-300 px-4 py-3" /></div>
          <div><label htmlFor="student-course" className="block mb-1 text-gray-600">Mata Kuliah</label><input id="student-course" required value={form.course} onChange={(event) => setForm({ ...form, course: event.target.value })} placeholder="Masukkan mata kuliah" className="w-full rounded border border-gray-300 px-4 py-3" /></div>
          <div><label htmlFor="student-score" className="block mb-1 text-gray-600">Nilai</label><input id="student-score" type="number" min="0" max="100" step="1" required value={form.score} onChange={(event) => setForm({ ...form, score: event.target.value })} placeholder="Masukkan nilai (0–100)" className="w-full rounded border border-gray-300 px-4 py-3" /></div>
          <div className="flex gap-3"><button type="submit" className="flex-1 rounded bg-sky-600 py-3 font-semibold text-white hover:bg-sky-700 disabled:opacity-50">{busy ? "Menyimpan..." : editingId === null ? "Submit" : "Simpan Perubahan"}</button>{editingId !== null && <button type="button" onClick={resetForm} className="rounded border border-gray-300 px-5 py-3">Batal</button>}</div>
        </fieldset>
      </form>
    </main>
  );
}
