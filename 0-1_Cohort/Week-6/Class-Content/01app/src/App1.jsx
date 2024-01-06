function App1(){

    return <div>
        <CardWrapper innerComponent={<TextComponent/>} />
    </div>
}


function CardWrapper(){
   
    //create a div which has a border (hint: the way to create a border is border:2px solid black)
    // and inside the div render the props
    return <div style={{border:"2px solid black", padding:20}}>

    </div>

}

function TextComponent(){

}

export default App1