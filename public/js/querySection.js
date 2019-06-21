class QuerySection{
    constructor(queryDiv) {
        const queryBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        queryBtn.innerText = "Query !";
        deleteBtn.innerText = "Delete ALL !";
        queryDiv.appendChild(queryBtn);
        queryDiv.appendChild(deleteBtn);
        queryBtn.onclick = () => { this.onQuery(); };
        deleteBtn.onclick = () => { this.onDelete(); };
        
        const tableDiv = document.createElement('div');
        tableDiv.id = "tableDiv";
        const tableNode = document.createElement('table');
        tableNode.id = 'tid'; // ???
        tableNode.classList.add("displayNone");
        tableDiv.appendChild(tableNode);
        queryDiv.appendChild(tableDiv);

        this.onQuery = this.onQuery.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }

    renderTable(data){
        // Data is a array
        console.log(data);

        
        var str = "<tr><td colspan='3'> 用戶喜好統計 </td></tr>";
        for(var ele of data){
            let tmpStr = "<tr><td>" + ele['product'] + 
                "</td><td>" + ele['case'] + "</td><td></td></tr>\n";
            str += tmpStr;
        }
        let table = document.querySelector("#tid");
        table.classList.remove("displayNone");
        table.innerHTML = str;
    }

    async onQuery() {
        
        const options = {
            method: "GET"
        };
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        //options.body = JSON.stringify(retJson);
        //var path = "https://mvform.herokuapp.com/record";
        var path = "/record";
        console.log(options);

        const response = await fetch(path, options).then(function (response) {
            return response.json()
        }).catch(function (err) {
            return JSON.stringify(err);
        });
        console.log(response);
        
        this.renderTable(response['data']);
    }

    async onDelete() {

        const options = {
            method: "DELETE"
        };
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        //options.body = JSON.stringify(retJson);
        //var path = "https://mvform.herokuapp.com/record";
        var path = "/record";
        console.log(options);

        const response = await fetch(path, options).then(function (response) {
            return response.json()
        }).catch(function (err) {
            return JSON.stringify(err);
        });
        
        console.log(response);

        //this.renderTable(response['data']);
    }
}