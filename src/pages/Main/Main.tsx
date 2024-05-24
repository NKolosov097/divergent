import React, { Suspense } from 'react'
import styles from './Main.module.css'
import SkeletonButton from 'antd/es/skeleton/Button'
import { Divider, Row } from 'antd'
import { Helmet } from 'react-helmet'

const Articles = React.lazy(() => import("./components/Articles/Articles"))
const StatisticTable = React.lazy(() => import("./components/StatisticTable/StatisticTable"))

const Main = () => {
  return (
    <>
      <Helmet title='Статьи' />
      <section className={styles.section}>
        <Suspense 
          fallback={<Row justify='space-between' align='middle' style={{ width: '100%' }}>
            {Array.from({ length: 8 }, () => Math.random()).map((item) => (
              <SkeletonButton
                key={item}
                active
                block
                style={{ height: 300, width: "100%", margin: "2% auto" }}
              />
            ))}
          </Row>}
        >
          <Articles />
        </Suspense>

        <Divider />
        
        <Suspense 
          fallback={
            <SkeletonButton
              active
              block
              style={{ height: 500, width: "100%" }}
            />
          }
        >
          <StatisticTable />
        </Suspense>
      </section>
    </>
  )
}

export default Main