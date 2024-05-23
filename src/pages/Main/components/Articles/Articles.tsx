import { Button, Card, Col, Row, Typography } from "antd"
import styles from './Articles.module.css'
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import { articleSelector } from "../../../../redux/slices/articles";
import { Like } from "../../../../components/ui/LikeIcon/LikeIcon";
import { CommentIcon } from "../../../../components/ui/CommentIcon/CommentIcon";
import { useEffect, useState } from "react";
import { IArticle } from "../../../../types/types";
import Input from "antd/es/input/Input";

const Articles = () => {
  const articles = useAppSelector(articleSelector)

  const [filterArticles, setFilterArticles] = useState<IArticle[]>(articles)

  useEffect(() => {
        setFilterArticles(articles)
    }, [articles])

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

  return (
    <>
      <Row justify='center' align='middle' style={{ width: '100%', marginTop: 20 }}>
        <Input 
        style={{ width: '98%' }}
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
                        onClick={() => navigate(`/articles/${article.id}`)}
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
      </>
  )
}

export default Articles