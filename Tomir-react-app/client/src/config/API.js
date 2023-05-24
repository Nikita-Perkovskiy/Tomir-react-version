const getData = () => {
  return fetch("./data.json").then((response) => response.json());
};

export default getData;
