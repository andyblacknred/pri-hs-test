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
  @media screen and (max-width: $mobile)
    display: none

.btn
  text-transform: uppercase
  color: $white
  font-weight: 600
  font-family: 'Open Sans', sans-serif
  text-decoration: none
  padding: 9px 19px
  background-color: $main
  display: inline-block
  font-size: 12px
  @media screen and (max-width: $mobile)
    padding: 5px 7px

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
  //height: 48px
  @media screen and (max-width: $mobile)
    font-size: 28px
    line-height: 32px

.patients
  display: flex
  justify-content: space-between
  min-height: calc(100vh - 162.5px)
  @media screen and (max-width: $mobile)
    flex-direction: column
  .patient
    display: flex
    width: 40%
    align-items: center
    justify-content: space-between
    @media screen and (max-width: $mobile)
      width: 100%
      border-bottom: 2px solid $grey
    &:last-child
      flex-direction: row-reverse
      @media screen and (max-width: $mobile)
        flex-direction: row
      .patient-img
        object-position: bottom right
        @media screen and (max-width: $mobile)
          object-position: bottom left
          transform: scaleX(-1)
    .patient-img
      width: 60%
      height: 100%
      object-fit: contain
      object-position: bottom left
      @media screen and (max-width: $mobile)
        width: 200px
        height: 100%
        max-width: 50%
        align-self: flex-end
    .patient-info
      text-align: center
      @media screen and (max-width: $mobile)
        padding-top: 10px
        padding-bottom: 10px
      .patient-name
        font-size: 40px
        color: $titleBlack
        font-family: 'Khand', sans-serif
        margin: 0
        margin-bottom: 8px
        line-height: 48px
        @media screen and (max-width: $mobile)
          font-size: 28px
          line-height: 32px
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

.bottom-info
  color: $grey
  font-family: 'Open Sans', sans-serif
  font-size: 12px
  line-height: 24px
  position: absolute
  bottom: 14px
  left: 29%
  margin: 0
  max-width: 50%
  @media screen and (max-width: $mobile)
    position: static
    padding: 15px
    max-width: none


</style>


