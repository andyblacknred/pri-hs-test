<template>
  <div class="bottom-block" :class="{ opened: isOpenedBottomBlock }">
    <div class="bottom-block-item" :style= "[item.isOpened ? {height: openedItemHeight} : {}]" :class="{ opened: item.isOpened && isOpenedBottomBlock }" v-for="(item, index) in blocks" :key="index">
      <div class="block-btn" @click="toggleBlock(item)"></div>
      <div class="block-content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBlock',
  computed: {
    blocks: function () {
      return this.$store.getters.getContentBlocks.map(item => {
        item.isOpened = false
        return item
      })
    },
    isOpenedBottomBlock: function () {
      return this.blocks.some(item => item.isOpened)
    },
    openedItemsCount: function () {
      return this.blocks.filter(item => item.isOpened).length
    },
    closedItemsCount: function () {
      return this.blocks.filter(item => !item.isOpened).length
    },
    openedItemHeight: function () {
      return (100 - 10 * this.closedItemsCount) / this.openedItemsCount + '%'
    }
  },
  methods: {
    toggleBlock(item) {
      item.isOpened = !item.isOpened;
    }
  }
}
</script>

<style lang="sass" scoped>

.bottom-block
  position: fixed
  bottom: 50px
  height: 20vh
  left: 50px
  right: 50px
  font-size: 16px
  color: $black
  font-family: 'Roboto', sans-serif
  transition: .5s
  &.opened
    height: calc(100vh - 100px)
    transition: .5s
    @media screen and (max-width: $mobile)
      height: calc(100vh - 90px)
    .bottom-block-item
      height: 10%
      transition: .5s
      &.opened
        height: 90%
        transition: .5s
  @media screen and (max-width: $mobile)
    left: 8px
    right: 8px
  .bottom-block-item
    height: 50%
    background-color: $white
    position: relative
    transition: .5s
    &.opened
      .block-btn
        &::after
          transform: translate(-50%, -50%)
          left: 50%
          transition: .5s
    .block-btn
      position: absolute
      width: 16px
      height: 16px
      right: 10px
      top: 10px
      cursor: pointer
      &::before,
      &::after
        content: ''
        display: block
        width: 100%
        height: 2px
        background-color: $black
        position: absolute
        transform: translate(-50%, -50%)
        left: 50%
        top: 50%
      &::after
        transform: rotate(-90deg) translate(0%, 0%)
        left: 0
        transition: .5s
    .block-content
      padding: 15px 25px
      box-sizing: border-box
      border-top: 2px solid $grey
      overflow: auto
      height: 100%
      &::v-deep(p)
        margin: 0
</style>


