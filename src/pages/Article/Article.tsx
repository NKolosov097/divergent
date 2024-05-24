import { Button, Col, Divider, Row, message } from 'antd'
import styles from './Article.module.css'
import { ReadOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { articleActions, getArticleById } from '../../redux/slices/articles'
import { useParams } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { CommentIcon } from '../../components/ui/CommentIcon/CommentIcon'
import { Like } from '../../components/ui/LikeIcon/LikeIcon'
import { Comment } from '../../components/ui/Comment/Comment'
import Form, { useForm } from 'antd/es/form/Form'
import FormItem from 'antd/es/form/FormItem'
import TextArea from 'antd/es/input/TextArea'
import { Helmet } from 'react-helmet'

const Article = () => {
  const { id } = useParams() 
  const article = useAppSelector(state => getArticleById(state, id ?? ''))
  const dispatch = useAppDispatch()

  const [form] = useForm();

  const addComment = (data: { comment: string }) => {
    dispatch(articleActions.addComment({
      id: article?.id,
      changes: {
        comments: [
          ...article.comments,
          {
            id: `${article?.id}.${article.comments.length + 1}`, 
            author: 'Колосов Никита',
            body: data?.comment, 
            createdAt: new Date().toLocaleDateString()
          }
        ]
      }
    }))

    form.resetFields()
  }
  
  return (
    <>
    <Helmet title={article?.title}/>
      <section className={styles.section}>
        <Row justify='start' style={{ marginTop: 20, gap: 10 }}>
          <Col>
            <ReadOutlined style={{ color: 'orange', fontSize: '4em' }} />
          </Col>

          <Col style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            <span className={styles.createdAt}>
              {article?.createdAt}
            </span>
            <span className={styles.author}>
              Автор:&nbsp;{article?.author}
            </span>
            <Title 
              level={1}
              ellipsis={{ 
                rows: 2, 
                expandable: true, 
                symbol: (expanded) => expanded ? "скрыть" : 'раскрыть'
              }} 
              className={styles.title}
            >{article?.title}</Title>
          </Col>

          <Col>
              <Like count={article?.likes} />
              <CommentIcon count={article?.comments?.length} />
          </Col>
        </Row>

        <Divider style={{ margin: '10px 0' }} />

        <div className={styles.imgContainer}>
          <img
            src={article?.photoUrl}
            alt={article?.title}
            className={styles.img}
          />
        </div>

        <Row>
          <p className={styles.body}>{article?.body}</p>
          <p className={styles.description}>{article?.description}</p>
        </Row>
        
        <Divider style={{ margin: '10px 0' }} />

        <Row>
          <Title level={3} className={styles.commentTitle}>
            Комментарии
          </Title>
          <ul className={styles.commentList}>
            {article?.comments?.length > 0 
              ? article?.comments?.map(comment => (
                  <li key={comment?.id} className={styles.commentItem}>
                    <Comment {...comment}  />
                  </li>
                ))
              : <Row 
                  justify='center' 
                  align='middle' 
                  style={{ margin: '10px 0', textAlign: 'center' }}
                >
                  Пока что нет ни одного комментария, но Вы можете стать первым!
                </Row>
            }

            <Row style={{ width: '100%' }}>
              <Form
                  form={form}
                  layout="vertical"
                  style={{ width: '100%' }}
                  onFinish={addComment}
              >
                  <FormItem 
                    name='comment'
                    rules={[
                      {
                        validator: (rule, value) => {
                          if (!value.trim()) {
                            return Promise.reject(rule.message);
                          }
                          return Promise.resolve();
                        },
                        message: "Введите комментарий",
                      },
                    ]}
                    style={{ width: '100%' }}
                  >
                      <TextArea autoSize placeholder="Вы можете оставить здесь свой комментарий" style={{ minHeight: 80 }} />
                  </FormItem>
                  <Row justify='start' align='middle' style={{ marginTop: -15 }}>
                    <Button 
                      type='primary' 
                      onClick={() => form.submit()}
                    >
                        Сохранить комментарий
                    </Button>
                  </Row>
              </Form>
              </Row>
          </ul>
        </Row>
      </section>
    </>
  )
}

export default Article