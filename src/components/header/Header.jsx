import { Menu } from "antd"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
        <Menu mode="horizontal">
            <Menu.Item key="1">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/products">Products</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Header