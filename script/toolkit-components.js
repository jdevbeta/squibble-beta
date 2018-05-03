Vue.component('icon', {
    props: {
        name: {
            type: [String],
            default:'star'
        },
        size: {
            type: [String],
            default: '24px'
        },
        w: {
            type: [String],
        },
        h: {
            type: [String],
        },
        color: {
            type: [String]
        },
    },
    template: `
        <span class="icon"
            v-bind:style="calculatedSize">
            <svg class="iconSvg"
                viewBox="0 0 24 24"
                v-html=svgHtml
                width="100%"
                height="100%"
            >
            </svg>
        </span>
    `,
    computed: {
        svgHtml(){
            return library[this.name];
        },
        calculatedSize(){
            if(this.w && this.h){
                console.log('NOT');
                return {width:this.w, height:this.h}
            } else {
                console.log('WAS');
                return {width:this.size, height:this.size}
            }
        }
    },
})

Vue.component('formbuilder', {
    template: `
        <form class="sqblForm">
            <div v-for="item in dataArray" :class="item.class">
                <label v-if="item.icon || item.title">
                    <icon v-if="item.icon" :name="item.icon" size="5vh"></icon>
                    <span class="label-text">{{item.title}}</span>
                </label>
                <input type="text" 
                    :placeholder="item.id" 
                    :style="{width: item.width}" 
                    v-model="item.value" 
                required/>
            </div>
        </form>
    `,
    props: [
        'dataArray'
    ]
})

Vue.component("mainsearch", {
    template: `
        <div id="mainSearch">
            <icon name="search" size="5vh"></icon>
            <input type="text" placeholder="Search"/>
        </div>
    `,
    methods: {
        executeSearch(){
            
        }
    }
})