var base={
    methods:{
        show: function(){
            this.visible = true;
        },
        hide: function(){
            this.visible = false;
        },
        toggle: function(){
            this.visible = !this.visible;
        }
    },
    data: function() {
        return{
            visible:false,
        };
    }
}

Vue.component('tooltip',{
    template:`
    <div>
        <span @mouseenter="show" @mouseleave="hide">bys</span>
        <div v-if="visible">
            baiyansong
        </div>
    </div>
    `,
    mixins: [base],
});

Vue.component('popup',{
    template:`
    <div>
        <button @click="toggle">Popup</button>
        <div v-if="visible">
            <h4>title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit inventore delectus aliquam nihil eligendi perspiciatis et possimus itaque molestiae dicta quos ab, eveniet illum iste veritatis assumenda! Sunt, autem!
            <br>
            <span @click="hide">X<span>
        </div>
    </div>
    `,
    mixins: [base],
});


new Vue({
    el:'#app',
    data: {
      
    }
});