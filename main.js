let list = document.querySelectorAll("ul li");
        let experiment = document.querySelector(".experiment");
        

        // holding completely ! 
        function holdData(){
            if(localStorage.getItem("change-bgColor")){
                experiment.style.backgroundColor = localStorage.getItem("change-bgColor")
                // to avoid reset the main active li (Red) problem when we do reload to the page
                
                list.forEach((li) => {
                    li.classList.remove("active");
                })

                let storedColor = localStorage.getItem("change-bgColor");
                let dataColor = document.querySelector(`[data-color="${storedColor}"]`);

                dataColor.classList.add("active");
            }
        }

        holdData();
        
        list.forEach((element)=>{
            element.addEventListener("click",function(Event){
                // list not current element
                list.forEach((ele) => {
                    ele.classList.remove("active");
                });

                // Event to access to the current clicked element
                Event.currentTarget.classList.add("active")

                // local storage started !
                localStorage.setItem("change-bgColor",Event.currentTarget.dataset.color);
                experiment.style.backgroundColor = localStorage.getItem("change-bgColor")
            
                // after this step we needed to hold the changes
            })
        })