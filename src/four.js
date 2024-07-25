function Four(){
    const branches = ["IT","CSE","AIDS","AIML"];
    const branchList = branches.map((branch,index) => <li key={index}>{branch}</li>)
    return(
        <div>
            <h1>List of branches</h1>
            <ul>{branchList}</ul>
        </div>
        
    );
}
export default Four;