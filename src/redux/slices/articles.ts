import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit"
import { RootState } from "../rootReducer"
import { db } from "../../database/db"
import { IArticle } from "../../types/types"

const initialState: IArticle[] = []

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
                await db.articles
                    .where({ id: payload.id })
                    .modify({ comments:  payload.changes.comments})
            }

            addCommentDb()

            articleAdapter.updateOne(state, payload)
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
