import './insurance.css'


export default function insurance() {
    
    return (

        <div className="card">
            <img src="https://media.istockphoto.com/vectors/car-insurance-vector-id1298340803" className="card__image" alt="car insurance" />
            <div className="card__content">
                <time datetime="2022-09-25" className="card__date">25 Sep 2022</time>
                <span className="card__title">"Comprehensive coverage pays to repair or replace a covered vehicle that's stolen or damaged by something other than collision or rolling over."</span>
                </div>
            </div>

        );
}