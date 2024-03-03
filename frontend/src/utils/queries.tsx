
import pool from './db'

const getEnergySourceBreakdown = async () => {
    const result = await pool.query('SELECT * FROM energy_source_breakdown');
    return result.rows;
};

const getMetadata = async () => {
    const result = await pool.query('SELECT * FROM metadata');
    return result.rows;
};

const getSmartMeterData = async () => {
    const result = await pool.query('SELECT * FROM smart_meter');
    return result.rows;
};

export {
    getEnergySourceBreakdown,
    getMetadata,
    getSmartMeterData,
};
