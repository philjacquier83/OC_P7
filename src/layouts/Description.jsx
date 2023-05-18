import TagName from '../components/TagName'
import Stars from '../components/Stars'
import '../styles/layouts/Description.css'

function Description({annonce}) {
    const Tags = annonce.tags ? annonce.tags : [] 
    console.log(Tags)
    return (
        <div className="LocationMainBloc">
            <div className="LocationInformation">
                <div className="LocationDescription">
                    <div className="LocationName">{ annonce.title }</div>
                    <div className="Location">{ annonce.location }</div>
                    
                </div>
                <div className="LocationTags">{ Tags.map((tag, index) => 
                    <span key={`${tag}-${index}`}><TagName tags={ tag } /></span> )} 
                </div>
                
            </div>
            <div className="LocationHostRating">                
                <div className="LocationHost">
                    <div className="LocationHostName">
                        { annonce.host.name }
                    </div>
                    <div>
                        { annonce.host.picture ? 
                            <img src={ annonce.host.picture } alt={ annonce.host.name } className="LocationHostPic" />
                            :
                            <div className="NoHostPic"></div>
                        }
                    </div>
                </div>
                <div className="LocationRating"><Stars rating={ annonce.rating }/></div>
            </div>
        </div>
    )
}

export default Description