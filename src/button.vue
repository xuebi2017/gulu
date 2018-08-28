<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <g-icon class="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    // props: ['icon', 'iconPosition']
    props: {
        icon: {
            // type: String,
            // default: 'loading'
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return value === 'left' || value === 'right';
            }
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin {
        0% {transform: rotate(0deg)};
        100% {transform: rotate(360deg)};
    }
    .g-button {
        height: var(--button-height);
        line-height:var(--button-line-height);
        font-size: var(--font-size);
        background: var(--button-bg);
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        padding: 0 1em;
        display: inline-flex;
        vertical-align: top;
        align-items: center;
        justify-content: center;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .2em;
        }
        > .content {
            order: 2
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }
        }
        > .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>

