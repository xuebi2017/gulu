import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)


new Vue({
    el: "#app",
    data: {
        loading: false,
        message: ''
    },
    methods: {
        change(e) {
           this.message = e
        },
        input(e) {
            // console.log(e.target.value)
        },
        focus(e) {
            // console.log(e.target.value)
        },
        blur(e) {
            // console.log(e.target.value)
        }
    }
})