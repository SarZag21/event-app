import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

import { create } from 'domain';
import { request } from 'http';


export const actions = {
    create: async({request}) => {
        const formData= await request.formData();
        const name = formData.get('name');
        //write to database
        await pool.execute('INSERT INTO categories (name) VALUES (?)',
            [name]
        );

        redirect(303, '/admin/categories');
    }
};