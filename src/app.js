import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading: true
    }
})