<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <div class="step-form-page">
      <a-steps :current="step">
        <a-step title="填写转账信息" />
        <a-step title="确认转账信息" />
        <a-step title="完成" />
      </a-steps>

      <div class="step-form-action">
        <StepForm1 v-if="step === 0" />
        <StepForm2 v-if="step === 1" />
        <StepForm3 v-if="step === 2" />
      </div>
    </div>
  </a-card>
</template>

<script>
import StepForm1 from "./components/StepFormPage/StepForm1.vue";
import StepForm2 from "./components/StepFormPage/StepForm2.vue";
import StepForm3 from "./components/StepFormPage/StepForm3.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "StepFormPage",
  components: {
    StepForm1,
    StepForm2,
    StepForm3,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("step", ["step"]),
  },
  mounted() {
    this.setTransferInfo(null);
    this.setStep(0);
  },
  methods: {
    ...mapMutations("step", ["setStep", "setTransferInfo"]),
    prevStep() {
      this.setStep(this.step - 1);
    },
    nextStep() {
      this.setStep(this.step + 1);
    },
  },
};
</script>

<style lang="less" scoped>
.step-form-page {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .step-form-action {
    margin-top: 32px;
    width: 700px;
  }
}
</style>
