import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit"
import { RootState } from "../rootReducer"
import { db } from "../../database/db"
import { IArticle } from "../../types/types"

const initialState: IArticle[] = [
          {
              id: '1',
              photoUrl: 'https://static.wixstatic.com/media/4b903a_f64ac781cbb247b18c8b58634aa9600e~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4b903a_f64ac781cbb247b18c8b58634aa9600e~mv2.jpg',
              title: "Занимательная статья",
              description: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне",
              author: 'Женя Петров',
              body: `Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"),`,
              createdAt: '13.05.2024',
              likes: 20,
              comments: [
                {
                  id: '1.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                },
                {
                  id: '1.2',
                  author: 'Иван Печкин',
                  body: `Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов`,
                  createdAt: '12.05.2024'
                },
                {
                  id: '1.3',
                  author: 'Женя Петров',
                  body: `Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния`,
                  createdAt: '10.05.2024'
                },
              ]

          },
          {
              id: '2',
              photoUrl: "https://www.zastavki.com/pictures/1366x768/2014/Nature___Seasons___Spring_The_end_of_spring_grass_069180_24.jpg",
              title: "Почему он используется?",
              description:
                  "Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века",
              author: 'Орлов Иван',
              body: `Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.`,
              createdAt: '08.05.2024',
              likes: 29,
              comments: [
                {
                  id: '2.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '3',
              photoUrl: "https://mobimg.b-cdn.net/v3/fetch/2f/2f3f975ca9f6bf44afecca01fc433d07.jpeg?w=2200",
              title: "Где его взять?",
              description:
                  "В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов",
              author: 'Александров Илья',
              body: `Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.`,
              createdAt: '05.05.2024',
              likes: 666,
              comments: [
                {
                  id: '3.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '4',
              photoUrl: "https://i.ytimg.com/vi/DvDORUgS9kk/maxresdefault.jpg",
              title: "Откуда он появился?",
              description:
                  "Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков",
              author: 'Петрова Виктория',
              body: `Vestibulum tempor lorem ac felis accumsan, nec dapibus leo interdum. Vestibulum semper lacus non sodales pulvinar. Maecenas sed rhoncus tortor. Nulla eu molestie magna, id feugiat ligula. Donec leo turpis, pretium sed faucibus eu, faucibus eu mauris. Vivamus tincidunt justo eu laoreet scelerisque. Maecenas placerat nisi sit amet leo eleifend, et feugiat ipsum aliquet. Ut eleifend ornare velit, non euismod ipsum semper ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at sapien ac odio sagittis blandit at efficitur erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut sapien purus. Donec pellentesque diam bibendum, finibus mi nec, ornare erat. Nam ex felis, tempus ut varius non, sollicitudin ac metus.`,
              createdAt: '06.05.2024',
              likes: 77,
              comments: [
                {
                  id: '4.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '5',
              photoUrl: "https://fikiwiki.com/uploads/posts/2022-02/1645052411_24-fikiwiki-com-p-kartinki-na-zadnii-fon-27.jpg",
              title: "Классический текст Lorem Ipsum",
              description:
                  "Его популяризации в новое время послужили публикация листов Letraset",
              author: 'Панкратов Георгий',
              body: `Vestibulum lacinia ut enim ut luctus. Aliquam erat volutpat. Vivamus posuere leo id fringilla malesuada. Etiam vel ante turpis. Curabitur volutpat aliquam lorem, ac placerat leo lacinia vel. Pellentesque feugiat diam a nunc vestibulum vestibulum. Duis et sem quam. Duis fringilla justo a dolor bibendum finibus. Nam orci libero, tempor ut est vel, venenatis sagittis eros. Praesent sit amet felis a elit ornare euismod`,
              createdAt: '01.05.2024',
              likes: 5,
              comments: [
                {
                  id: '5.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '6',
              photoUrl: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614786658_151-p-spokoinii-fon-165.jpg",
              title: "Английский перевод 1914 года, H. Rackham",
              description:
                  "В более недавнее время, программы электронной вёрстки типа Aldus PageMaker",
              author: 'Дмитриев Андрей',
              body: `Aliquam auctor sapien in auctor venenatis. Sed aliquam elit neque, eget convallis libero tempus ultricies. Donec elementum tellus ut ex gravida, eget dignissim libero lacinia. Donec tincidunt consectetur dolor, et cursus erat consequat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac mollis urna. Duis vel quam ligula. Etiam varius id dolor sed tincidunt.`,
              createdAt: '23.05.2024',
              likes: 44,
              comments: [
                {
                  id: '6.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '7',
              photoUrl: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614627743_85-p-fon-gradient-dlya-fotoshopa-99.jpg",
              title: "Ричард МакКлинток",
              description:
                  "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться",
              author: 'Яковлев Андрей',
              body: `Suspendisse venenatis arcu massa, imperdiet placerat leo lobortis id. Maecenas dolor nulla, efficitur ut elit a, congue pharetra nulla. Cras porta augue sit amet dui semper vehicula. Donec sed lobortis nisi. Integer laoreet, mi ac finibus maximus, elit nibh tristique nunc, in elementum velit eros a nulla. Phasellus ornare mauris felis, non maximus nisl aliquet at. Phasellus interdum purus turpis, ac tempor dui porta in. Phasellus non mauris ut sapien tincidunt fermentum. Sed interdum nunc tortor, a commodo metus porta vitae. Maecenas rhoncus, dolor et convallis pellentesque, lorem ex faucibus lectus, eget sodales metus leo a leo. Maecenas blandit aliquam sem, sit amet auctor mauris imperdiet quis.`,
              createdAt: '03.05.2024',
              likes: 13,
              comments: [
                {
                  id: '7.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
          {
              id: '8',
              photoUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/06c3faac0389183ee914d0b0c1288d59.png",
              title: "Aldus PageMaker",
              description:
                  "Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона",
              author: 'Рудакова Мирослава',
              body: `Curabitur congue in odio ac ultrices. Ut nulla sapien, porttitor rutrum molestie id, sollicitudin ut mauris. Aenean id pellentesque tellus. Aliquam volutpat sem lacus, ac lacinia turpis consequat et. Etiam luctus congue accumsan. Donec id arcu sit amet nibh egestas dignissim sit amet ac ipsum. Sed at tempus orci. Quisque sollicitudin nunc ut sapien pellentesque, vel tristique mi vulputate. Sed condimentum pulvinar hendrerit. Pellentesque ultrices dolor eget tempus elementum. Nam id odio nisi. Proin maximus tortor tempus, sodales orci sit amet, egestas magna. Morbi a vestibulum turpis. Pellentesque tincidunt mollis diam sit amet bibendum. Donec turpis dui, varius eget elementum mollis, ornare sed augue`,
              createdAt: '17.05.2024',
              likes: 0,
              comments: [
                {
                  id: '8.1',
                  author: 'Женя Петров',
                  body: `Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.`,
                  createdAt: '13.05.2024'
                }
              ]
          },
        ]

const articleAdapter = createEntityAdapter({
    selectId: (article: IArticle) => article.id,
})

export const articlesSlice = createSlice({
    name: "articles",
    initialState: articleAdapter.getInitialState(initialState),
    reducers: {
        initArticles: articleAdapter.addMany,
        addArticle: (state, { payload }) => {
            const addArticleToDb = async () => {
                await db.articles.add(payload)
            }

            addArticleToDb()

            articleAdapter.addOne(state, payload)
        },
        changeArticleInfo: (state, { payload }) => {
            const changeArticleInfoIntoDb = async () => {
                await db.articles
                    .where({ id: payload.id })
                    .modify(payload.changes)
            }

            changeArticleInfoIntoDb()

            articleAdapter.updateOne(state, payload)
        },
        addComment: (state, { payload }) => {
            const addCommentDb = async () => {
                const article = await db.articles
                    .where({ id: payload.articleId })
                    .toArray()

                await db.articles
                    .where({ id: payload.articleId })
                    .modify({ comments: [...article[0].comments, {
                        id: payload?.articleId,
                        createdAt: payload?.createdAt,
                        author: payload?.author,
                        body: payload?.comment
                    } ] })
            }

            addCommentDb()

            articleAdapter.updateOne(state, payload)            

            // Object?.values(state?.entries)?.map(item => {
            //     if (item?.id === payload?.articleId) {
            //         item.comments = [...item.comments, {
            //             id: payload?.articleId,
            //             createdAt: payload?.createdAt,
            //             author: payload?.author,
            //             body: payload?.comment
            //         }]
            //     }
                
            //     console.log(item);

            //     return item
            // })
        },
        deleteArticle: (state, action) => {
            const deleteArticleFromDb = async () => {
                await db.articles.where({ id: action.payload }).delete()
            }

            deleteArticleFromDb()

            articleAdapter.removeOne(state, action)
        },
        deleteAllArticles: articleAdapter.removeAll
    },
})

export const { actions: articleActions } = articlesSlice

export const { selectAll: articleSelector, selectById: getArticleById } =
    articleAdapter.getSelectors((state: RootState) => state[articlesSlice.name])
