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
  data: function () {
    return {
      blocks: [
        {
          isOpened: false,
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolore et fuga illo iste maiores minus, neque non porro quisquam suscipit. Doloribus ipsum odio quod! Hic quod ullam veniam voluptates. Architecto cumque eligendi eum ratione voluptate voluptatem? Ab ad architecto, atque corporis cupiditate dolorem et expedita fugit itaque libero magnam magni, molestiae nemo nihil nostrum, quasi reiciendis reprehenderit repudiandae rerum sed sequi sint sit totam ullam veniam voluptas voluptatibus! Ab ad adipisci aliquam asperiores at autem beatae delectus deleniti dolor dolorem earum eligendi explicabo fuga fugiat impedit ipsam iste labore laboriosam molestias nesciunt nihil numquam odit officia officiis quam quas quibusdam ratione, recusandae repellendus sed sequi soluta tempora tempore totam velit vero vitae. A accusantium ad alias architecto aspernatur commodi deserunt dolores eligendi et ex exercitationem expedita, hic ipsam iure iusto maxime minima molestiae neque nihil nisi perferendis quas quisquam quos reiciendis rem, reprehenderit sint soluta tempora ut veniam. Accusamus alias aspernatur autem beatae cupiditate debitis deserunt dolore dolores ea error eum ex exercitationem illo in itaque laborum laudantium magni maxime nam natus necessitatibus nesciunt obcaecati odio officia porro praesentium quaerat quam qui quibusdam, repellat repellendus sed sint sunt voluptas voluptate voluptatem voluptatibus! Consequatur deserunt eius eligendi est fugit hic illo iste magnam minus neque odit, omnis quos reiciendis repudiandae saepe sequi soluta unde veniam veritatis vitae. Asperiores assumenda eius facere impedit odit possimus provident quis similique, sit tempore, temporibus voluptas. Accusantium aliquid asperiores, culpa nam nobis quod velit veritatis. Incidunt, ipsum iusto molestias natus odit qui rerum vero?</p>'
        },
        {
          isOpened: false,
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, autem blanditiis deserunt eos eum minus molestias odit quidem quis veniam. Aliquam amet assumenda in omnis suscipit veritatis voluptatibus. Adipisci consequuntur eligendi nihil odit repellendus? Architecto corporis, dicta eius est eum ex expedita id necessitatibus nihil nobis odit officiis possimus quam, quibusdam sed, sint temporibus velit? Aperiam, autem commodi cum distinctio dolorem dolores error explicabo facilis hic impedit in ipsa iure iusto laborum laudantium maxime minima nemo neque obcaecati odio officia omnis possimus provident quae repellat repellendus repudiandae tempore temporibus totam voluptatum. Adipisci at commodi eligendi error ex porro reiciendis vel? Animi deserunt eveniet fuga ipsam maxime repellendus sequi velit! A mollitia obcaecati sapiente sit voluptas! Dignissimos doloremque natus perspiciatis quia sapiente unde, velit. Fugiat, obcaecati praesentium. Commodi dolor ducimus eaque ipsa pariatur quae, repellat! Ad amet aspernatur assumenda, culpa debitis deleniti distinctio dolorum ea eaque eius fuga fugit impedit maxime mollitia nesciunt nisi quia quo quod saepe tempore tenetur totam voluptate! Ad aspernatur atque consectetur consequatur consequuntur dicta doloremque eos eveniet inventore, magni nesciunt obcaecati pariatur porro quas quis, quisquam, quod sapiente sed sequi soluta ut vel veritatis. Aliquid, architecto at consequatur, consequuntur cumque doloremque eligendi enim ex facilis in magni minus nostrum porro possimus quas soluta voluptas. Aperiam delectus dolor ea et illo illum ipsam iste iusto libero magnam, minima nisi officia officiis pariatur perspiciatis quisquam, reiciendis sapiente sequi sunt voluptatibus. Ab accusantium asperiores at aut autem beatae consequatur distinctio dolore doloribus eos ex excepturi exercitationem facilis illum impedit laboriosam libero magni maxime molestias nemo nesciunt nobis non numquam quae quam qui quis quos sint suscipit tempora ullam, ut vel voluptas? Consectetur, ducimus est ex, itaque iure numquam obcaecati, quasi rem repellendus similique sunt tempore velit voluptate. Aliquid assumenda consectetur corporis fugiat inventore, labore quo reiciendis tempora voluptate voluptatibus?</p>'
        }
      ]
    }
  },
  computed: {
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
      right: 5px
      top: 5px
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


