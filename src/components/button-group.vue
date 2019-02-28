<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this)
        for(let node of this.$el.children){
            let nodeName = node.nodeName.toLowerCase()            
            if(nodeName !== 'button') {
                console.warn(`g-button-group的子元素应该全是 g-button, 但是你写的是${nodeName}`)
            }
        }
    }
}
</script>

<style lang="scss">
    .g-button-group {
        display: inline-flex;
        > .g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child {
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }

        }
    }
</style>

