<template>
  <div class="top-block">
    <img class="logo" alt="logo" src="@/assets/logo.png">
    <h1 class="title">Start treatment early for your patients with mCSPC</h1>
    <div class="patients">
      <div class="patient">
        <img src="@/assets/patient-1.png" alt="patient" class="patient-img">
        <div class="patient-info">
          <h2 class="patient-name">ANTHONY*</h2>
          <p class="patient-desc">68-year-old male newly diagnosed with mCSPC</p>
          <a class="btn" href="#">READ STORY</a>
          <p class="patient-additional-info">* Not an actual patient.</p>
        </div>
      </div>
      <div class="patient">
        <img src="@/assets/patient-2.png" alt="patient" class="patient-img">
        <div class="patient-info">
          <h2 class="patient-name">TOM*</h2>
          <p class="patient-desc">76-year-old male with mCSPC and a comorbidity </p>
          <a class="btn" href="#">READ STORY</a>
          <p class="patient-additional-info">* Not an actual patient.</p>
        </div>
      </div>
    </div>
    <p class="bottom-info">mCSPC = metastatic castration-sensitive prostate cancer</p>
  </div>
</template>

<script>
export default {
  name: 'TopBlock'
}
</script>

<style lang="sass" scoped>

.top-block
  background-color: $white
  position: relative
  overflow: auto

.logo
  width: 110px
  height: 37px
  position: absolute
  top: 27px
  left: 16px

.btn
  text-transform: uppercase
  color: $white
  font-weight: 600
  font-family: 'Open Sans', sans-serif
  text-decoration: none
  padding: 9px 19px
  background-color: $main
  display: inline-block

.title
  max-width: 65%
  text-align: center
  color: $main
  font-size: 39px
  font-family: 'Khand', sans-serif
  margin-left: auto
  margin-right: auto
  margin-top: 14.5px
  margin-bottom: 0
  line-height: 48px

.patients
  display: flex
  justify-content: space-between
  .patient
    display: flex
    &:last-child
      flex-direction: row-reverse
    .patient-img
      width: 50%
      height: 100%
      object-fit: cover
      object-position: top left
    .patient-info
      text-align: center
      .patient-name
        font-size: 40px
        color: $titleBlack
        font-family: 'Khand', sans-serif
        margin: 0
        margin-bottom: 8px
        line-height: 48px
      .patient-desc
        font-size: 16px
        line-height: 22px
        margin: 0
        color: $black
        font-family: 'Roboto', sans-serif
        max-width: 190px
        margin-bottom: 16px
      .patient-additional-info
        color: $grey
        font-family: 'Open Sans', sans-serif
        font-size: 12px
        line-height: 24px
        margin: 0
        margin-top: 8px





</style>


