function Five(){
    const val = true;

    return(
        <div>
            {val ? <h1>True</h1>:<div>False</div>}
            This is true
        </div>
    );
}
export default Five;