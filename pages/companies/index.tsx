import CompanyTable from '../../components/organism/CompanyTable'

import { data } from "autoprefixer"

import getAllCompanies from "../../services/companyServices"


export default function CompaniesPage (){
   const companyServices= getAllCompanies()
    return(
       
      <>
        <CompanyTable companysServices={company}/>
        
 
        
       </>
    )
}