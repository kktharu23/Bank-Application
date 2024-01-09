
import {useEffect,useState } from "react";
import Card from'react-bootstrap/Card';
import "./style.css";
import axios from "axios";

export default function Alldata() {
  const [data, setData] = useState();

   //strapi
   let url = "http://localhost:1337/api/bank-accounts";
   useEffect(() => {
     async function fetchdata() {
       let res = await axios(url);
       let result = res.data;
       setData(result);
      }
      fetchdata();
    }, [url]);
    console.log(data);
    const handleDelete= async (id)=>{
      try{
        await axios.delete(`${url}/${id}`);
        setData((prevState)=>({
          ...prevState,
          data:prevState.data.filter((item)=>item.id !== id),
        }));
      }catch(error){
        console.log(error);
      }
    };
 
  return (
    <>
    <div class="a1">
      <div class="alldata"> <h1 class="all">Alldata</h1>
      {data && data.data && data.data.map((item, key) => (
        <Card className="alldatacard">
          <Card.Header>User{key+1}</Card.Header>
             <ul className="ul">
              <li>
                Name:{item.attributes.Name}
              </li>
              <li>
                Email:{item.attributes.Email}
              </li>
              <li>
                Balance:{item.attributes.Balance}
                
              </li>
             </ul>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </Card>
        
      ))}
      </div>
      </div>
    </>
  );
}

