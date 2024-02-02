let baseUrl = "https://jsonplaceholder.typicode.com/users";
let data = "";

document.addEventListener("DOMContentLoaded", getTableHead, false);
async function getTableHead() {
    const res = await fetch(baseUrl);
    data = await res.json();
    
    let colums = Object.keys(data[0]);
    let heads = document.querySelector('thead');
    let trTag = '<tr>';

    for (let i = 0; i < colums.length; i++) {
        trTag += `<th>${colums[i]}</th>`
    }
    trTag += '</tr>'
    heads.innerHTML = trTag

    //Call the tbody data here
    getTableBodyData();
}

function getTableBodyData() {
    const body = document.querySelector("tbody");
    let tags = "";

    data.map(tag => {
        tags += `<tr>
            <td>${tag.id}</td>
            <td>${tag.name}</td>
            <td>${tag.username}</td>
            <td>${tag.email}</td>
            <td>${tag.address.street}</td>
            <td>${tag.phone}</td>
            <td>${tag.website}</td>
            <td>${tag.company.name}</td>
            </tr>
        `
    });
    body.innerHTML = tags;
}