import { UserOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import { IComment } from "../../../types/types"

export const Comment = ({ author, createdAt, body }: IComment) => {
  return (
    <Row align='top' justify='start' style={{ flexWrap: 'nowrap' }}>
        <Col>
            <UserOutlined />
        </Col>
        <Col style={{ marginLeft: 10 }}>
            <Row align='middle' justify='start'>
                <span style={{ opacity: 0.7 }}>{createdAt}</span>
                <span style={{ marginLeft: 10 }}>{author}</span>
            </Row>
            <Row>
                {body}
            </Row>
        </Col>
    </Row>
  )
}
