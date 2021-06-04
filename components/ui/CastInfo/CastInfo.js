

const CastInfo = (props) => {

    return (
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast & Crew
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>
                        Actor
                    </li>
                    <li>
                        Harrison Ford
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Grip Boy
                    </li>
                    <li>
                        Tommy Myleftfoot
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Producer
                    </li>
                    <li>
                        Jon Hamm
                    </li>
                </ul>
            </div>
            <div className="cast-info__list">
                <div className="cast-info__group-title">
                    Director
                </div>
                <ul className="cast-info__crew">
                        <li>
                            George Lucas
                        </li>
                    </ul>
            </div>
        </div>
    )
  
}

export default CastInfo;