import { Table, TableProps } from "antd";
import { useAppSelector } from "../../../../redux/hooks"
import { articleSelector } from "../../../../redux/slices/articles"

interface ITable {
    id: string | number
    index: number
    title: string
    countArticles: number
    countSymbols: number
    countComments: number
}

const StatisticTable = () => {
    const articles = useAppSelector(articleSelector)

    const countSymbols = articles
        ?.map(article => article?.body?.length)
        ?.reduce((acc, cur) => acc += cur, 0)

    const columns: TableProps<ITable>['columns'] = [
        {
            key: '0',
            title: '№',
            dataIndex: 'index',
            align: 'center',
        },
        {
            key: '1',
            title: 'Название',
            dataIndex: 'title',
        },
        {
            key: '2',
            title: 'Количество статей',
            align: 'center',
            dataIndex: 'countArticles',
            onCell: (_, index) => {
                if (index === 0) {
                    return { rowSpan: articles?.length };
                }

                return { rowSpan: 0 };
            },
            rowScope: 'rowgroup'
        },
        {
            key: '3',
            align: 'center',
            dataIndex: 'countSymbols',
            title: 'Общее количество символов',
            onCell: (_, index) => {
                if (index === 0) {
                    return { rowSpan: articles?.length };
                }

                return { rowSpan: 0 };
            },
            rowScope: 'rowgroup'
        },
        {
            key: '4',
            align: 'center',
            dataIndex: 'countComments',
            title: 'Количество комментариев',
        }
    ]

  return (
    <Table 
        rowKey='id'
        columns={columns} 
        bordered
        pagination={false}
        dataSource={articles.map((article, index) => (
            { 
                id: article?.id,
                index: index + 1,
                title: article?.title,
                countArticles: articles?.length,
                countSymbols: countSymbols,
                countComments: article?.comments?.length
            }
        ))} 
        style={{ marginBottom: 10 }}
    />
  )
}

export default StatisticTable