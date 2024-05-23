import { CommentOutlined } from "@ant-design/icons"
import { Col } from "antd"

interface ICommentIconProps {
    count: number
}

export const CommentIcon = ({ count }: ICommentIconProps) => {
  return (
    <Col style={{ display: 'flex', gap: 5 }}>
      <CommentOutlined style={{ fontSize: 16 }} />
      <span style={{ fontSize: 16 }}>{count}</span>
    </Col>
  )
}
