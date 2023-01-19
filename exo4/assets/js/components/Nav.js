let Nav = {  
    data() {  
        return {  
            ul : false
        } 
    },
    methods : {
        open (){
            if(this.ul === false){
                this.ul = true;
            }else{
                this.ul = false;
            }
        }
    },
    props : [
        "title",
        "links"
        ],
    template: `  
		<nav>
		    <h2 @click="this.open()">
		        {{ title }}
		        <span class="bi bi-arrow-down-left-square-fill"></span>
		    </h2>
    		<ul v-if="this.ul === true" class="open">
    		<template v-for="Aside in Asides">
        		<li>
        		    {{ links }}
        		</li>
        	</template>
    		</ul>
    		<ul v-else class="">
    		</ul>
		</nav>
	`
};  
  
export { Nav };