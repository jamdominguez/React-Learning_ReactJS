const API_KEY = '6e290af'
const API_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const search = (text, _callBack) => {
    fetch(`${API_END_POINT}&s=${text}`)
    .then(res => res.json())
    .then(data => {         
        _callBack(data)
    })
}

export const details = (id, _callBack) => {
    fetch(`${API_END_POINT}&i=${id}`)
    .then(res => res.json())
    .then(data => {         
        _callBack(data)
    })
}