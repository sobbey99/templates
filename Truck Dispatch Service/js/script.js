
//acardion


const tab = document.querySelectorAll(".acardion__item");

for(item of tab){
    item.addEventListener("click", function(){
        if(this.classList.contains('show')){
            this.classList.remove('show');
        } else{
            for(item of tab){
                item.classList.remove('show');    
            }
            this.classList.add('show');
        }
    });
}

