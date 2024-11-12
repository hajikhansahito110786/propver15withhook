"use client";
import { useParams,useSearchParams } from "next/navigation";

const Page= () =>{
  const usePathparameter=useParams();
  console.log(usePathparameter);
    //console.log(params)
    const useSearchparameter=useSearchParams();
    console.log(useSearchparameter);
    const name=useSearchparameter.get("name")
    const age=useSearchparameter.get("age")
    console.log(name);
    //const {id}=await params;
    //const {name,age,edu}=await searchParams;
    //console.log(name,age,edu);


    return(
      <div>
       <h1>
       page
       </h1>
       <h1>
       {usePathparameter.id}
        
        </h1>
       <h1>
       {name}
       
       </h1>
       <h1>
       {age}
        
       </h1>
       <h1>
        all
       
       </h1>
          </div>
        
    );
  };
  export default Page;
  