import {useEffect,useState} from "react";
import axios from "axios";

function Datafetching2() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchMyData = async ()=> {
            const res = await axios.get('https://fakestoreapi.com/users');
            console.log(res.ok);
            //console.log(await res.json());
            const resData = await res.data;
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    })
    return(
            <div>Fetching Data
                
            {data.map((dataItem,index)=>
            <tr key={index}>{dataItem.title}</tr>
            )}
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">state</th>
                    <th scope="col">username</th>
                    <th scope="col">password</th>
                    <th scope="col">city</th>
                    <th scope="col">zipcode</th>
                    

                    </tr>
                </thead>
                <tbody>
                {data.map((dataItem,index)=>
                            <tr key={index}>
                                <td>{dataItem.Id}</td>
                                <td>{dataItem.Address}</td>
                                <td>{dataItem.state}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.password}</td>
                                <td>{dataItem.city}</td>
                                <td>{dataItem.zipcode}</td>
                            </tr>
                            )}
                    
                </tbody>
                </table>
            </div>
    );
}
export default Datafetching2;