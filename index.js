function App(){
    const [quotes, setQuotes] = React.useState([]);
    const [randomeQuotes, setRandomQuotes] = React.useState([])
    const [color,setColor] = React.useState("#f1c40f")
    
    React.useEffect(
        ()=>{
            async function fetchData(){
                const response = await fetch("https://type.fit/api/quotes")
                const data = await response.json(
                )
            
                setQuotes(data);
                let randomIndex = Math.floor(Math.random()*data.length);
                setRandomQuotes (data[randomIndex])
            }
            fetchData()
        }, []
    )
    const getNewQuote = ()=>{
        const colors = [
        "#bfc9ca",
        "#f1c40f",
        "#ca6f1e",
        "#273746",
        "#212f3c",
        "#73c6b6",
        "#1c2833",
        "#616a6b",
        "#873600",
        "#212f3d",
        "#bfc9ca",
        "#f1c40f"
        ]
        
        let randomIndex = Math.floor(Math.random()*quotes.length);
        let randomColorIndex = Math.floor(Math.random()*colors.length);
        setRandomQuotes (quotes[randomIndex])
        setColor(colors[randomColorIndex])
    }
    return (

    <div style = {{ backgroundColor:color, minHeight: "100vh"}}>
        <div className="container  pt-5  mx-auto" >
        <div className="card text-center jumbotron" id="quote-box">
            <div className="card-body">
                <h1 id="text">"{randomeQuotes.text}"</h1>
                <h2 id="author">- {randomeQuotes.author}</h2>
                    
                        <button id="new-quote"  className="btn btn-dark btn-block" onClick={getNewQuote}>New quote</button>

                        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+ randomeQuotes.text + '"'+'-'+randomeQuotes.author)} id="tweet-quote"  className="twitter-share-button btn btn-warning mt-3"
                        ><i className="fa fa-twitter"></i></a>
                
            </div>
        </div>
        </div>
    </div>   
            
           
            
    )
            
            

    }
ReactDOM.render(<App/>, document.getElementById('app'))



