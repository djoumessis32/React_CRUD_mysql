import dbConn from "../../config/dbconfig.js";

const Employe = function (employe) {
   this.first_name = employe.first_name;
   this.last_name = employe.last_name;
   this.email = employe.email;
   this.telephone = employe.telephone;
   this.organisation = employe.organisation;
   this.designiation = employe.designiation;
   this.salaire = employe.salaire;
   this.status = employe.status ? employe.status : 1;
   this.created_at = new Date();
   this.updated_at = new Date();
};

Employe.getAllEmploye = (resulta) => {
   dbConn.query("SELECT * FROM employes", (err, res) => {
      if (err) {
         console.log("Error d'ouverture ou de connexion");
         resulta(null, err);
      } else {
         console.log("Employe selectionne avec succes !!!");
         resulta(null, res);
      }
   });
};

Employe.getEmployeByID = (id, resulta) => {
   dbConn.query("SELECT * FROM employes WHERE id=?", [id], (err, res) => {
      if (err) {
         console.log(" Identifiern iniexistant");
         resulta(null, err);
      } else {
         console.log();
         resulta(null, res);
      }
   });
};

Employe.CreateEmploye = (data, resulta) => {
   dbConn.query("INSERT INTO employes SET ?", data, (err, res) => {
      if (err) {
         console.log("erreur l'ord de l'insertion");
         resulta(null, err);
      } else {
         console.log("Employe joute avec success");
         resulta(null, res);
      }
   });
};

Employe.UpdateEmploye = (id, data, resulta) => {
   dbConn.query(
      'UPDATE employes SET first_name=?, last_name=?, email=?, telephone=?,organisation=?,designiation=?, salaire=?, status=? WHERE id=?',
      [data.first_name, data.last_name, data.email, data.telephone, data.organisation, data.designiation, data.salaire, data.status, id], (err, res) => {
         if (err) {
            console.log("Erreur l'ord de la mise a jour de l'employe")
            resulta(null, err);
         } else {
            console.log("employe mise a jour avec succes ")
            resulta(null, res);
         }
      });
};

Employe.DeletEmploye = (id, resulta) => {
   dbConn.query("DELETE FROM employes WHERE id=?", [id], (err, res) => {
      if (err) {
         console.log("Erreur lord de la suppression");
         resulta(null, err)
      } else {
         console.log("Employe supprimer avec succes");
         resulta(null, res);
      }
   })
}
export default Employe;
