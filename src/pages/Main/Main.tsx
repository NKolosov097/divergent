import React, { Suspense } from 'react'
import styles from './Main.module.css'
import SkeletonButton from 'antd/es/skeleton/Button'
import { Divider } from 'antd'
import { Helmet } from 'react-helmet'

const Articles = React.lazy(() => import("./components/Articles/Articles"))
const StatisticTable = React.lazy(() => import("./components/StatisticTable/StatisticTable"))

const Main = () => {
  return (
    <>
      <Helmet title='Статьи' />
      <section className={styles.section}>
        <Suspense 
          fallback={Array.from({ length: 8 }, () => Math.random()).map((item) => (
            <SkeletonButton
              key={item}
              active
              block
              style={{ height: 300, width: "30%", margin: "2% auto" }}
            />
          ))}
        >
          <Articles />
        </Suspense>

        <Divider />
        
        <Suspense 
          fallback={
            <SkeletonButton
              active
              block
              style={{ height: 300, width: "30%", margin: "2% auto" }}
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