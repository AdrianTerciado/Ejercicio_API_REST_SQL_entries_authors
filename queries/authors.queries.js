const queries = {
    getAuthorByEmail: `
        SELECT *
        FROM authors
        WHERE email=$1;`,
    getAllAuthors: `
        SELECT *
        FROM authors`,
     createAuthor: `
     INSERT INTO authors(name,surname,email,image) 
     VALUES ($1,$2,$3,$4)`,
    updateAuthor: `
        UPDATE
            authors
        SET
            name=$1, 
            surname=$2, 
            email=$3, 
            image=$4
        WHERE 
            name=$5`,
    deleteAuthorByEmail: `
        DELETE FROM authors
        WHERE email=$1`
}

module.exports = queries;