const url = 'http://localhost:5000/cars';

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}