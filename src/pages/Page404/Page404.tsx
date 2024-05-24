import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

const Page404 = () => {
    const navigate = useNavigate()

  return (
    <Result
        status="404"
        title="404"
        subTitle="Такой страницы не существует :("
        extra={<Button type="primary" onClick={() => navigate("/divergent")}>Вернуться на главную</Button>}
    />
  )
}

export default Page404