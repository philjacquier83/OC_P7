function Carrousel({annonce, pic}) {
    return (
        <div className="LocationBannerContainer">
            <img src={annonce.pictures[pic]} alt={annonce.title} className="LocationBanner" />
        </div>
    )
}

export default Carrousel