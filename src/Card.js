function Card(props) {
    return (
      <div className="col-md-2">
        <div className="card">
        <img className="card-img-top" src="/atom.jpg" width={100} />
          <h5 className="card-title">Shree</h5>
          <div className="card-body">
          <h4>Name:{props.userFromArray}</h4>
            <h4>Branch:{props.user.branch}</h4>
            <h4>Place:{props.user.Year}</h4>
            
            <p className="card-text">sometext</p>
            <button type="button" className="btn btn-primary">
              button
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Card;
