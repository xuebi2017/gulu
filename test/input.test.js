const expect = chai.expect;
import Vue from "vue";
import Input from "../src/components/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.exist;
  });

  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });
    it("接收value", () => {
      vm = new Constructor({
        propsData: {
          value: "123"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("123");
    });
    it("接收disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
    });
    it("接收readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });
    it("接收error", () => {
      vm = new Constructor({
        propsData: {
          error: "你错了"
        }
      }).$mount();
      const useElements = vm.$el.querySelectorAll("use");
      expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-error");
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.textContent).to.equal("你错了");
    });
  });
  describe("events", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });

    it("支持change/input/focus/blur", () => {
      ["change", "input", "focus", "blur"].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        const inputElement = vm.$el.querySelector("input");
        let event = new Event(eventName);
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event);
      });
    });
    // it("支持change", () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on("change", callback);
    //   const inputElement = vm.$el.querySelector("input");
    //   let event = new Event("change");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event);
    // });
    // it("支持input", () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on("input", callback);
    //   const inputElement = vm.$el.querySelector("input");
    //   let event = new Event("input");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event);
    // });
    // it("支持focus", () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on("focus", callback);
    //   const inputElement = vm.$el.querySelector("input");
    //   let event = new Event("focus");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event);
    // });
    // it("支持blur", () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on("blur", callback);
    //   const inputElement = vm.$el.querySelector("input");
    //   let event = new Event("blur");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event);
    // });
  });
});
