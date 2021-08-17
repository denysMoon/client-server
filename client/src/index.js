import './style.css'

function getFetch(){
    fetch('/api/')
    .then(res=>res.json())
    .then(res=>console.log(res))
}

getFetch()