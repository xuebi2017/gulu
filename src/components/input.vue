<template>
  <div class="wrapper">
    <input
      type="text"
      :value="inputValue"
      :disabled="disabled"
      :readonly="readonly"
      :class="dangerClass"
      @change="changeValue($event.target.value)"
      @input="inputHandler($event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
    <!-- <p>{{inputValue}}</p> -->
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "g-input",
  data() {
    return {
      dangerClass: {
        error: this.error
      },
      inputValue: this.value
    };
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    "g-icon": Icon
  },
  created() {
    // setInterval(() => {
    //   this.inputValue += "!";
    // }, 1000);
  },
  computed: {},
  methods: {
    changeValue($event) {
      this.$emit("change", $event);
    },
    inputHandler(event) {
      this.$emit("input", event);
      // this.inputValue = event.target.value;
    }
  }
};
</script>
<style lang='scss' scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$error-box-shadow-color: rgba(244, 80, 32, 0.8);
$error-border-color: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      color: #ccc;
      border-color: #ccc;
      background-color: #fff;
      cursor: not-allowed;
    }
  }
  > input.error {
    border-color: $error-border-color;
    &:focus {
      box-shadow: inset 0 1px 3px $error-box-shadow-color;
    }
  }
  > .icon-error {
    fill: $error-border-color;
  }
  > .error-message {
    color: $error-border-color;
  }
}
</style>
