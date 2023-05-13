import '../styles/components/Banner.css'


function BlocImage({ pageID, texte }) {

    console.log(pageID);
    console.log(texte);

    return (
        
        <div className={`BlocImage${pageID}`}>
            {texte !== '' ? (<div className="TextHomeImage">
                {texte}
            </div>) : null
            }
        </div>
    )
}

export default BlocImage