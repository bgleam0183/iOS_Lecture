import './App.css';

function Food({name, picture}) {
    return (
        <div>
            <h3>I Like {name}!</h3>
            <img src = {picture} width = "50%" alt = {name} />
        </div>
    )
}

function App3() {
    const foodILike = [
        {
            name: 'Kimchi',
            image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
        },
        {
            name: 'Samgyeopsal',
            image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg'
        },
        {
            name: 'Bibimbap',
            image: 'http://cdn-image.myrecipes.com/sites/default/files'
        },
        {
            name: 'Doncasu',
            image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
        },
        {
            name: 'Kimbap',
            image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
        },
    ]

    return (
        <div>
            <h1>Food</h1>
            {foodILike.map(dish => (
                <Food name = {dish.name} picture = {dish.image} />
            ))}
        </div>
    );
}

export default App3;