import mysql from 'mysql';

//connexion al albase de données 

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_sql'
});


dbConn.connect((error) => {
    if (error) throw error;
    console.log('Succes de la connextion a la base de donnée !!!!');
})


export default dbConn;