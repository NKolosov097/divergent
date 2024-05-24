import { Button, Card, Col, Popover, Row, Typography } from "antd"
import styles from './Articles.module.css'
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { articleActions, articleSelector } from "../../../../redux/slices/articles";
import { Like } from "../../../../components/ui/LikeIcon/LikeIcon";
import { CommentIcon } from "../../../../components/ui/CommentIcon/CommentIcon";
import { useEffect, useState } from "react";
import { IArticle } from "../../../../types/types";
import Input from "antd/es/input/Input";
import { PlusCircleOutlined } from "@ant-design/icons";
import Modal from "antd/es/modal/Modal";
import Form, { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { v4 as uuid } from 'uuid'

  const freeImages: string[] = [
    'https://wallpapercrafter.com/sizes/2048x1152/58977-beach-nature-4k-sea.jpg',
    "https://www.funnyart.club/uploads/posts/2022-01/1641486753_1-www-funnyart-club-p-rasslablyayushchie-krasivie-foni-1.jpg",
    "https://wallpapercrafter.com/sizes/2048x1152/33141-Quebec-4k-HD-wallpaper-St-Ferdinand-Canada-pink-sunrise-water-lake-sea-ocean-sky-clouds.jpg",
    "https://www.tapeciarnia.pl/tapety/normalne/tapeta-kamienie-i-drzewa-nad-zamglonym-jeziorem.jpg",
    "https://img.goodfon.ru/original/1920x1200/c/ab/tomhannock-vodohranilische.jpg"
  ]

const Articles = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(articleSelector)
  const [filterArticles, setFilterArticles] = useState<IArticle[]>(articles)

  useEffect(() => {
        setFilterArticles(articles)
    }, [articles])

  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false)
  const [form] = useForm()

  const navigate = useNavigate()

   const size = [
    { xl: 10, md: 12 },
    { xl: 14, md: 12 },
    { xl: 14, md: 12 },
    { xl: 10, md: 12 },
    { xl: 12, md: 12 },
    { xl: 12, md: 12 },
  ];

  const getSize = (i: number) => 
    size.length <= i ? i - Math.floor(i / size.length) * size.length : i;

  const addComment = async (data: IArticle) => {
    const newArticle: IArticle = {
      id: uuid(),
      photoUrl: freeImages[Math.floor(Math.random()) * (freeImages?.length - 1)],
      title: data?.title,
      body: data?.body,
      author: data?.author,
      description: data?.description,
      comments: [],
      createdAt: new Date().toLocaleDateString(),
      likes: 0
    }

    dispatch(articleActions.addArticle(newArticle))
    setIsOpenedModal(false)  
    form.resetFields()  
  } 

  return (
    <>
      <Row 
        justify='space-evenly' 
        align='middle' 
        style={{ 
          width: '100%', 
          marginTop: 20, 
          gap: 20, 
          padding: '0 10px' 
        }}
      >
        <Input 
          style={{ flex: 1 }}
          placeholder="Поиск по статьям" 
          onChange={(e) =>  {
            if (e?.target?.value === "") {
                setFilterArticles(articles)
            } else {
              setFilterArticles(articles.filter(art => 
              art
                ?.title
                ?.toLowerCase()
                ?.includes(e?.target?.value?.toLowerCase())
              ))
            }
          }}
        />
        <Popover trigger='hover' content="Добавление статьи">
          <Button 
            icon={<PlusCircleOutlined />} 
            onClick={() => setIsOpenedModal(true)}
          />
        </Popover>
      </Row>
      <ul className={styles.articleList}>
            {filterArticles?.map((article, index) => (
              <Col
                key={article.id}
                xl={size[getSize(index)].xl}
                md={size[getSize(index)].md}
                xs={24}
                role="listitem"
                style={{ margin: '10px 0', minHeight: 'auto' }}
              >
                <Card
                  hoverable
                  bordered
                  cover={
                    <div style={{ position: "relative" }}>
                      <Button
                        type="text"
                        className={styles.imgBtn}
                        onClick={() => navigate(`/divergent/articles/${article.id}`)}
                      >
                        <img
                          src={article?.photoUrl}
                          className={styles.cardImg}
                          alt={article?.title}
                        />
                      </Button>
                    </div>
                  }
                  className={styles.card}
                >
                  <Meta
                    title={
                      <Typography.Paragraph
                        ellipsis={{
                          rows: 1,
                          suffix: "",
                          symbol: "ещё",
                          expandable: true,
                        }}
                        className={styles.cardTitle}
                      >
                        {article?.title}
                      </Typography.Paragraph>
                    }
                    description={
                      <>
                        <Row className={styles.contentContainer}>
                          <Row className={styles.action} justify="space-between" align="middle">
                            <span className={styles.dateTime}>
                              {article?.createdAt}
                            </span>

                            <Row style={{ gap: 10 }}>
                              <Like
                                count={article?.likes}
                              />
                              <CommentIcon count={article?.comments?.length} />
                            </Row>
                          </Row>
                        </Row>
                        <Row style={{ paddingLeft: 10 }}>Автор: {article?.author}</Row>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
      </ul>

        <Modal 
          open={isOpenedModal}
          title="Добавление новой статьи"
          footer={null}
          onCancel={() => {
            setIsOpenedModal(false)
            form.resetFields()
          }}
        >
          <Form
            form={form}
            onFinish={addComment}
            layout="vertical"
          >
            <FormItem 
              label="Название" 
              name='title'
              rules={[
                {
                  validator: (rule, value) => {
                    if (!value.trim()) {
                      return Promise.reject(rule.message);
                    }
                    return Promise.resolve();
                  },
                  message: "Введите название статьи",
                },
              ]}
            >
              <TextArea autoSize placeholder="Название статьи" />
            </FormItem>

            <FormItem 
              label="Статья" 
              name='body'
              rules={[
                {
                  validator: (rule, value) => {
                    if (!value.trim()) {
                      return Promise.reject(rule.message);
                    }
                    return Promise.resolve();
                  },
                  message: "Введите статью",
                },
              ]}
            >
              <TextArea autoSize placeholder="Статья" />
            </FormItem>

            <FormItem 
              label="Автор" 
              name='author'
              rules={[
                {
                  validator: (rule, value) => {
                    if (!value.trim()) {
                      return Promise.reject(rule.message);
                    }
                    return Promise.resolve();
                  },
                  message: "Введите автора статьи",
                },
              ]}
            >
              <TextArea autoSize placeholder="Автор" />
            </FormItem>

            <FormItem 
              label="Описание" 
              name='description'
            >
              <TextArea autoSize placeholder="Описание статьи" />
            </FormItem>

            <Row justify='end' align='middle' style={{ gap: 20 }}>
              <Button 
                type="primary" 
                onClick={() => form.submit()}
              >
                Опубликовать
              </Button>

              <Button 
                onClick={() => {
                  setIsOpenedModal(false)
                  form.resetFields()
                }}
              >
                Отмена
              </Button>
            </Row>
          </Form>
        </Modal>
      </>
  )
}

export default Articles