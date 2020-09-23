import { createStore } from 'vuex'

export default createStore({
  state: {
    contentBlocks: [
      {
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolore et fuga illo iste maiores minus, neque non porro quisquam suscipit. Doloribus ipsum odio quod! Hic quod ullam veniam voluptates. Architecto cumque eligendi eum ratione voluptate voluptatem? Ab ad architecto, atque corporis cupiditate dolorem et expedita fugit itaque libero magnam magni, molestiae nemo nihil nostrum, quasi reiciendis reprehenderit repudiandae rerum sed sequi sint sit totam ullam veniam voluptas voluptatibus! Ab ad adipisci aliquam asperiores at autem beatae delectus deleniti dolor dolorem earum eligendi explicabo fuga fugiat impedit ipsam iste labore laboriosam molestias nesciunt nihil numquam odit officia officiis quam quas quibusdam ratione, recusandae repellendus sed sequi soluta tempora tempore totam velit vero vitae. A accusantium ad alias architecto aspernatur commodi deserunt dolores eligendi et ex exercitationem expedita, hic ipsam iure iusto maxime minima molestiae neque nihil nisi perferendis quas quisquam quos reiciendis rem, reprehenderit sint soluta tempora ut veniam. Accusamus alias aspernatur autem beatae cupiditate debitis deserunt dolore dolores ea error eum ex exercitationem illo in itaque laborum laudantium magni maxime nam natus necessitatibus nesciunt obcaecati odio officia porro praesentium quaerat quam qui quibusdam, repellat repellendus sed sint sunt voluptas voluptate voluptatem voluptatibus! Consequatur deserunt eius eligendi est fugit hic illo iste magnam minus neque odit, omnis quos reiciendis repudiandae saepe sequi soluta unde veniam veritatis vitae. Asperiores assumenda eius facere impedit odit possimus provident quis similique, sit tempore, temporibus voluptas. Accusantium aliquid asperiores, culpa nam nobis quod velit veritatis. Incidunt, ipsum iusto molestias natus odit qui rerum vero?</p>'
      },
      {
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, autem blanditiis deserunt eos eum minus molestias odit quidem quis veniam. Aliquam amet assumenda in omnis suscipit veritatis voluptatibus. Adipisci consequuntur eligendi nihil odit repellendus? Architecto corporis, dicta eius est eum ex expedita id necessitatibus nihil nobis odit officiis possimus quam, quibusdam sed, sint temporibus velit? Aperiam, autem commodi cum distinctio dolorem dolores error explicabo facilis hic impedit in ipsa iure iusto laborum laudantium maxime minima nemo neque obcaecati odio officia omnis possimus provident quae repellat repellendus repudiandae tempore temporibus totam voluptatum. Adipisci at commodi eligendi error ex porro reiciendis vel? Animi deserunt eveniet fuga ipsam maxime repellendus sequi velit! A mollitia obcaecati sapiente sit voluptas! Dignissimos doloremque natus perspiciatis quia sapiente unde, velit. Fugiat, obcaecati praesentium. Commodi dolor ducimus eaque ipsa pariatur quae, repellat! Ad amet aspernatur assumenda, culpa debitis deleniti distinctio dolorum ea eaque eius fuga fugit impedit maxime mollitia nesciunt nisi quia quo quod saepe tempore tenetur totam voluptate! Ad aspernatur atque consectetur consequatur consequuntur dicta doloremque eos eveniet inventore, magni nesciunt obcaecati pariatur porro quas quis, quisquam, quod sapiente sed sequi soluta ut vel veritatis. Aliquid, architecto at consequatur, consequuntur cumque doloremque eligendi enim ex facilis in magni minus nostrum porro possimus quas soluta voluptas. Aperiam delectus dolor ea et illo illum ipsam iste iusto libero magnam, minima nisi officia officiis pariatur perspiciatis quisquam, reiciendis sapiente sequi sunt voluptatibus. Ab accusantium asperiores at aut autem beatae consequatur distinctio dolore doloribus eos ex excepturi exercitationem facilis illum impedit laboriosam libero magni maxime molestias nemo nesciunt nobis non numquam quae quam qui quis quos sint suscipit tempora ullam, ut vel voluptas? Consectetur, ducimus est ex, itaque iure numquam obcaecati, quasi rem repellendus similique sunt tempore velit voluptate. Aliquid assumenda consectetur corporis fugiat inventore, labore quo reiciendis tempora voluptate voluptatibus?</p>'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getContentBlocks: state => {
      return state.contentBlocks
    }
  }
})
