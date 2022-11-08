import '../bootstrap-5.1.3-dist/css/bootstrap.min.css';
//F:\WORK\React\netology_course\cards\src\bootstrap-5.1.3-dist\css\bootstrap.min.css
export default function Card(props){

    return(
        <div className="card">
        {props.children}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}