<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <div class="step-form-page">
      <a-steps :current="currentStep">
        <a-step>
          <!-- <span slot="title">Finished</span> -->
          <template slot="title"> Finished </template>
          <span slot="description">This is a description.</span>
        </a-step>
        <a-step
          title="In Progress"
          sub-title="Left 00:00:08"
          description="This is a description."
        />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>

      <div class="step-form-action">
        <StepForm1 v-if="currentStep === 0" />
        <StepForm2 v-if="currentStep === 1" />
        <StepForm3 v-if="currentStep === 2" />
      </div>
    </div>
  </a-card>
</template>

<script>
import StepForm1 from "./components/StepFormPage/StepForm1.vue";
import StepForm2 from "./components/StepFormPage/StepForm2.vue";
import StepForm3 from "./components/StepFormPage/StepForm3.vue";

export default {
  name: "StepFormPage",
  components: {
    StepForm1,
    StepForm2,
    StepForm3,
  },
  data() {
    return {
      currentStep: 2,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.step-form-page {
  width: 1000px;
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
