class SubmitSection{
    constructor(submitDiv) {
        const submitBtn = document.createElement('button');
        submitBtn.innerText = "Submit !";
        submitDiv.appendChild(submitBtn);
        submitBtn.onclick = () => {this.onSubmit();};
    }
    onSubmit(){
        var choosenProduct = document.querySelector(".product.choosen");
        console.log(choosenProduct);
        
        var choosenGameCase = document.querySelector(".gameCase.choosen");
        let retJson = { product: choosenProduct.id, case: choosenGameCase.id};
        console.log(retJson);
        //const response = await fetch(info.path, info.options);
        const options = {
            method: "post"
        };
        options.body = JSON.stringify(retJson);
        var path = "https://mvform.herokuapp.com/record";
        const response = await fetch(path, options)
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