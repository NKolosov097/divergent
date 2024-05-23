import { Button } from 'antd'
import styles from './Footer.module.css'
import { GithubOutlined, SendOutlined } from '@ant-design/icons'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Button 
        icon={<GithubOutlined />} 
        type='text'
        style={{ color: 'var(--white)', fontSize: 16 }}
      >
        <a 
          href='https://github.com/NKolosov097' 
          target='_blank'
          rel="noreferrer"
        >
          NKolosov097
        </a>
      </Button>
    
      <Button 
        icon={<SendOutlined />}
        type='text'
        style={{ color: 'var(--white)', fontSize: 16 }}
      >
        <a 
          href='https://t.me/NKolosov097' 
          target='_blank'
          rel="noreferrer"
        >
          Telegram
        </a>
      </Button>
    </footer>
  )
}
