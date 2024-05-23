import { LikeOutlined } from "@ant-design/icons"
import { Col } from "antd"

interface ILikeProps {
    count: number
}

export const Like = ({ count }: ILikeProps) => {
  return (
    <Col style={{ display: 'flex', gap: 5 }}>
      <LikeOutlined style={{ fontSize: 16 }} />
      <span style={{ fontSize: 16 }}>{count}</span>
    </Col>
  )
}
