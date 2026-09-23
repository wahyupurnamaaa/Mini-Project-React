import test from 'node:test';
import assert from 'node:assert/strict';
import { extractJobs, filterJobs, salary } from '../src/jobs.js';
const jobs = extractJobs([{ _id: '1', title: 'Frontend Developer', company_name: 'Contoh A', company_city: 'Jakarta', job_status: '1', job_type: 'Remote' }, { id: 2, title: 'Designer', company_name: 'Contoh B', company_city: 'Bandung', job_status: 0, job_type: 'Onsite' }]);
test('normalizes array and data wrapper responses', () => { assert.equal(jobs[0].id, '1'); assert.equal(jobs[0].job_status, 1); assert.equal(extractJobs({ data: jobs }).length, 2); assert.throws(() => extractJobs({ error: 'invalid' })); });
test('search is case insensitive and combines city, type and status', () => { assert.equal(filterJobs(jobs, { query: ' DEVELOPER ', city: 'jakarta', type: 'Remote', status: '1' }).length, 1); assert.equal(filterJobs(jobs, { status: '0' })[0].id, '2'); assert.equal(filterJobs(jobs, { query: 'tidak ada' }).length, 0); assert.equal(filterJobs(jobs, { query: 'contoh', city: 'Bandung' }).length, 1); });
test('salary handles missing and invalid ranges without displaying NaN', () => { assert.equal(salary({}), 'Gaji belum dicantumkan'); assert.equal(salary({ salary_min: 9, salary_max: 1 }), 'Gaji belum dicantumkan'); assert.match(salary({ salary_min: 5000000, salary_max: 8000000 }), /5\.000\.000/); });
