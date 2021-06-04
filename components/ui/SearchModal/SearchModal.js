import {useStateContext} from '../../HBOProvider';

const SearchModal = (props) =>  {
    const globalState = useStateContext();

    const loopComp = (comp, digit) => {
      let thumbnails = [];
      for(let index = 0; index < digit; index++){
          thumbnails.push(comp);
      }
  
      return thumbnails;
    }
  
    return (
      <div className={`search-modal ${globalState.searchModalOpen ? 'search-modal--active' : '' }`}>
          <div className="search-modal__input-group">
            <input type="text" className="search-modal__input" value="" placeholder="Search for a title" />
            <div className="search-modal__close-btn" onClick={() => globalState.setSearchModalOpen(!globalState.searchModalOpen)}>
                <i className="fas fa-times" />
            </div>
          </div>

          <h3 className="search-modal__title">
            Popular Searches
          </h3>

         <div className="search-modal__thumbnails">
             {loopComp((<div className="search-modal__thumbnail">
                          <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460" />
                          <div className="search-modal__top-layer">
                              <i className="fas fa-play" />
                          </div>
                       </div>
              ), 10)}
         </div>
      </div>
    )
  }
  
  export default SearchModal;
  