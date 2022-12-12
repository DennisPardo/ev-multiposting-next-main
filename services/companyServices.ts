
import axios from "axios";
import { get } from "http";
import React ,{useState, useEffect } from "react";

 function getAllCompanies(){
   const[company, setCompany]=useState()
 useEffect(() => {
   axios
   .get(`http://localhost:3000/company/accept`)
   .then((res)=>{ 
      setCompany(res.data.company);
   })

 }, []);

return( 
   {company}
)
      
};
export default getAllCompanies;