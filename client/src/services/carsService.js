const url = "http://localhost:5000/cars";

export const getOne = (id) => {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const create = (
  imageUrl,
  make,
  model,
  fuel,
  color,
  rims,
  drive,
  textarea,
  interior,
  uid
) => {
  let order = {
    imageUrl,
    make,
    model,
    fuel,
    color,
    rims,
    drive,
    textarea,
    interior,
    uid,
  };
  return fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};

export const update = (id, car) => {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
};
