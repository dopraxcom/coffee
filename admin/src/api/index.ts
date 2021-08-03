export const fetchCategoriesURL = (url:string, json:{} ) => {
    let jsons = JSON.stringify(json);
    return new Promise((res, rej) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", `http://localhost:9006/super-admin/${url}`);
        xhttp.send(jsons);
        xhttp.onreadystatechange = () => {
          res(xhttp)
        }
      })
}