function Seven() {
    const names = ["name1","name1","name1"]
    return(
        <div>
            <ul>
                {
                    names.map((name,index)=>
                        <li key={index}>{name}</li>
                )
                }
            </ul>
        </div>
    );

}
export default Seven;