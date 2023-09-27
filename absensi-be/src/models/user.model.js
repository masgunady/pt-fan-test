const db = require('../helpers/db.helper')

const tableName = 'users'


exports.findAll = async(page, limit, search, sort, sortBy) => {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5
    search = search || ''
    sort = sort || 'id'
    sortBy = sortBy || 'ASC'
    const offset = (page - 1) * limit
    const queries = `
    SELECT * FROM ${tableName} WHERE "email" LIKE $3 ORDER BY "${sort}" ${sortBy} LIMIT $1 OFFSET $2
    `
    const values = [limit, offset, `%${search}%`]
    const {rows} = await db.query(queries, values)  
    return rows
}

exports.findOneWithEmail = async(email) => {
    const queries = `
    SELECT * FROM ${tableName} WHERE "email" = $1
    `
    const values = [email]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}
exports.findOneWithId = async(id) => {
    const queries = `
    SELECT email, npp, npp_supervisor FROM ${tableName} WHERE "id" = $1
    `
    const values = [id]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}

exports.create = async(data) => {
    const queries = `
    INSERT INTO ${tableName} ( "nama", "email", "npp", "npp_supervisor", "password") VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `
    const values = [data.nama, data.email, data.npp, data.npp_supervisor, data.password]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}