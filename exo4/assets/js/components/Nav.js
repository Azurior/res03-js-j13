let Nav = {  
    data() {  
        return {  
            ul : false
        } 
    },
    methods : {
        open (){
            let ul = document.querySelector("body main asside nav h2 ul");
            ul.classList.toggle("close");
        }
    },
    props : [
        "title",
        "links"
        ],
    template: `  
		<nav>
		    <h2 v-for="Aside in Asides" @click="open">
		        {{ title }}
		    </h2>
    		<ul v-if="ul === true" class="open">
        		<li v-for="Aside in Asides">
        		    {{ Aside.links }}
        		</li>
    		</ul v-else="ul === false" class="close">
    		<ul>
    		</ul>
		</nav>
	`
};  
  
export { Nav };