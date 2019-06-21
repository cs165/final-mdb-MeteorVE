class SubmitSection{
    constructor(submitDiv) {
        const submitBtn = document.createElement('button');
        submitBtn.innerText = "Submit !";
        submitDiv.appendChild(submitBtn);
        submitBtn.onclick = () => {this.onSubmit();};
    }
    async onSubmit(){
        var choosenProduct = document.querySelector(".product.choosen");
        console.log(choosenProduct);
        
        var choosenGameCase = document.querySelector(".gameCase.choosen");
        // For my self
        // let retJson = { product: choosenProduct.id, case: choosenGameCase.id };
        // For final project
        let retJson = { product: choosenProduct.innerHTML, case: choosenGameCase.innerHTML};
        const options = {
            method: "POST"
        };
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(retJson);
        //var path = "https://mvform.herokuapp.com/record";
        var path = "/record";
        console.log(retJson);
        console.log(options);
        
        const response = await fetch(path, options);
        
        
        /*
        // Example 
        fetch('https://thawing-stream-74537.herokuapp.com/comments', { method: 'post' })
            .then(function (response) {
                return response.json()
            }).catch(function (err) {
                return JSON.stringify(err);
            })
        */
    }
}