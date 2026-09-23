export const API = 'https://final-project-api-alpha.vercel.app/api/jobs';
export function normalizeJob(job) {
  return { ...job, id: String(job._id ?? job.id ?? ''), title: String(job.title || 'Posisi belum tersedia'), company_name: String(job.company_name || 'Perusahaan'), company_city: String(job.company_city || 'Lokasi belum tersedia'), job_status: Number(job.job_status) };
}
export function extractJobs(payload) {
  const list = Array.isArray(payload) ? payload : payload?.data;
  if (!Array.isArray(list)) throw new Error('Format data lowongan tidak valid.');
  return list.map(normalizeJob).filter(job => job.id);
}
export function filterJobs(jobs, { query = '', city = '', status = '', type = '' } = {}) {
  const search = query.trim().toLocaleLowerCase('id');
  return jobs.filter(job => (!search || `${job.title} ${job.company_name} ${job.company_city}`.toLocaleLowerCase('id').includes(search)) && (!city || job.company_city.toLowerCase() === city.toLowerCase()) && (status === '' || job.job_status === Number(status)) && (!type || job.job_type === type));
}
export function salary(job) {
  const min = Number(job.salary_min), max = Number(job.salary_max);
  const money = n => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
  if (!Number.isFinite(min) || !Number.isFinite(max) || min < 0 || max <= 0 || min > max) return 'Gaji belum dicantumkan';
  return `${money(min)} – ${money(max)}`;
}
