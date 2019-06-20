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
        
    }
}