function Carrousel({annonce}) {
    return (
        <div className="LocationBannerContainer">
            <img src={annonce.pictures[0]} alt={annonce.title} className="LocationBanner" />
        </div>
    )
}

export default Carrousel