const db =  require('../helpers/db.helper')

const tableName = 'epresence'

exports.findAll = async(page, limit, search, sort, sortBy) => {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5
    search = search || ''
    sort = sort || 'nama'
    sortBy = sortBy || 'ASC'
    const offset = (page - 1) * limit
    const queries = `
    SELECT
    epresence.id_user,
    users.nama,
    DATE(waktu) AS tanggal,
    MAX(CASE WHEN type = 'IN' THEN waktu END) AS waktu_masuk,
    MAX(CASE WHEN type = 'OUT' THEN waktu END) AS waktu_pulang,
    CASE WHEN SUM(CASE WHEN type = 'IN' THEN (is_approve::integer) ELSE 0 END) > 0 THEN TRUE ELSE FALSE END AS status_masuk,
    CASE WHEN SUM(CASE WHEN type = 'OUT' THEN (is_approve::integer) ELSE 0 END) > 0 THEN TRUE ELSE FALSE END AS status_keluar
    FROM ${tableName}

    JOIN users ON users.id = epresence.id_user

    WHERE "users"."nama" ILIKE $3
    GROUP BY
    id_user, tanggal, users.nama
    ORDER BY
        "${sort}" ${sortBy}
    LIMIT $1 OFFSET $2
    `
    // FROM ${tableName} WHERE "nama" LIKE $3 ORDER BY "${sort}" ${sortBy} LIMIT $1 OFFSET $2
    const values = [limit, offset, `%${search}%`]
    const {rows} = await db.query(queries, values)  
    return rows
}

exports.create = async(data) => {
    const queries = `
    INSERT INTO ${tableName} ( "id_user", "type", "is_approve" ,"waktu") VALUES ($1, $2, $3, $4)
    RETURNING *
    `
    const values = [data.id_user, data.type, data.is_approve, data.waktu]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}

exports.findOneWithId = async(id) => {
    const queries = `
    SELECT 
    ${tableName}.id,
    ${tableName}.waktu,
    ${tableName}.type,
    users.nama,
    users.npp,
    users.npp_supervisor
    FROM ${tableName} 
    JOIN users ON users.id = epresence.id_user
    WHERE "epresence"."id" = $1
    `
    const values = [id]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}

exports.update = async(id, data) => {
    const queries = `
    UPDATE ${tableName} SET "is_approve" = $2 WHERE "id" = $1
    RETURNING *
    `
    const values = [id, data.is_approve]
    const {rows} = await db.query(queries, values)  
    return rows[0]
}