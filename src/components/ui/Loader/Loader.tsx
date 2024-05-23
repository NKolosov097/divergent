import { LoadingOutlined } from "@ant-design/icons"
import { Row } from "antd"
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <Row className={styles.wrapper}>
        <LoadingOutlined style={{ fontSize: 36 }} />
    </Row>
  )
}
