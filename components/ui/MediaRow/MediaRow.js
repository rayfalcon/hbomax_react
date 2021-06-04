


const JustAdded = (props) =>  {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for(let index = 0; index < digit; index++){
        thumbnails.push(comp);
    }

    return thumbnails;
  }

  return (
    <div className="just-added">
       <h3 className="just-added__title">
           Just Added
       </h3>
       <div className="just-added__thumbnails">
           {loopComp((<div className="just-added__thumbnail">
                        <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460" />
                        <div className="just-added__top-layer">
                            <i className="fas fa-play" />
                        </div>
                     </div>
            ), 10)}
       </div>
    </div>
  )
}

export default JustAdded;
