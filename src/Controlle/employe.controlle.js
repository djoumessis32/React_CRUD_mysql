import EmployeM from "../models/employe.model.js";

export const getEmploye = (req, res) => {
   // console.log('here all employees list');
   EmployeM.getAllEmploye((err, employes) => {
      console.log("e are here");
      if (err) res.send(err);
      // console.log("Employe", employes);s
      res.send(employes);
   });
};

export const getEmployeById = (req, res) => {
   EmployeM.getEmployeByID(req.params.id, (err, employee) => {
      if (err) res.send(err);
      console.log("Employe selectionne  ", employee);
      res.send(employee);
   });
};

// creation employer
export const CreateEmploye = (req, res) => {
   const Employedata = new EmployeM(req.body);
   console.log("request date update body", req.body);
   if (req.body.constructor === Object || Object(req.body).lenght === 0) {
      res.send(400).send({
         success: false,
         message: "vellez remplir tous les champs ",
      });
   } else {
      console.log("information valide");
      EmployeM.CreateEmploye(Employedata, (err, employee) => {
         if (err) res.send(err);
         res.json({
            status: true,
            message: "Employe cree avec success",
            data: employee,
         });
      });
   }
};

//mise a jour mploye
export const UpdateEmploye = (req, res) => {
   const Employedata = new EmployeM(req.body);
   console.log("request date body", req.body);
   if (req.body.constructor === Object || Object(req.body).lenght === 0) {
      res.send(400).send({
         success: false,
         message: "vellez remplir tous les champs ",
      });
   } else {
      console.log("information valide");
      EmployeM.UpdateEmploye(req.params.id, Employedata, (err, employee) => {
         if (err) res.send(err);
         res.json({
            status: true,
            message: "Employe Mise jour avec success",
            data: employee,
         });
      });
   }
};

//supprimer enploye
export const DeletEmploye = (req, res) => {
   EmployeM.DeletEmploye(req.params.id, (err, employe) => {
      if (err)
         res.send(err)
      res.json({ success: true, message: 'Employe supprimer avec succes' })
   })
}
