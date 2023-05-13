import '../styles/layouts/Cards.css'



function WrapperCards({children}) {    

    return (
        <section className='CardsBlock'>
            {children}            
        </section>
    )
}

export default WrapperCards