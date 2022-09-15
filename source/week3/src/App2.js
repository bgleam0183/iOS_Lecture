import './App.css'

function Food(props) {
    return <h3>I Like {props.fav}!</h3>
}

function App2() {
    const foodILike = [
        {
            name: 'Kimchi',
            image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
        }
    ]

    return (
        <div>
            <h1>Hello!</h1>
            <Food fav = "kimchi"/>
            <Food fav = "ramen"/>
            <Food fav = "samgiopsal"/>
            <Food fav = "chukumi"/>
       </div>
    );
}

export default App2;