<template>
  <div class="color-picker">
    <input
      id="color-picker-input"
      class="color-picker-input"
      :value="color"
      @input="handleInput"
      type="color"
    />
    <div
      class="color-picker-box"
      :style="{
        backgroundColor: color,
      }"
      @click="handleClick"
    />
    <div class="color-picker-text">
      {{ color }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    defaultValue: {
      type: String,
      default: "#ffffff",
    },
  },
  data() {
    return {
      color: "#ffffff",
    };
  },
  mounted() {
    if (this.defaultValue) {
      this.color = this.defaultValue;
    }
  },
  methods: {
    handleClick() {
      console.log(123456);
      const dom = document.getElementById("color-picker-input");
      dom.click();
    },
    handleInput(e) {
      this.color = e.target.value;
      this.$emit("change", this.color);
    },
  },
};
</script>

<style lang="less" scoped>
.color-picker {
  padding: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;

  .color-picker-input {
    position: absolute;
    z-index: -1;
    width: 24px;
    height: 24px;
  }
  .color-picker-box {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 4px;
    border-radius: 4px;
  }
  .color-picker-text {
    width: 60px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}
</style>
