import { Veiculo } from '../../models/veiculoModel';
import fs from 'fs/promises';
import path from 'path';

const dbFilePath = path.join(__dirname, '../../database/db.json');

async function getVeiculos(): Promise<Veiculo[]> {
    try {
        const data = await fs.readFile(dbFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export { getVeiculos };
