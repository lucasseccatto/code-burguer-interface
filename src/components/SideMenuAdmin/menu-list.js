import BagIcon from '../../assets/bag-icon.svg'
import AddIcon from '../../assets/box-icon.svg'
import ShopIcon from '../../assets/shop-icon.svg'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: BagIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.ListProducts,
    icon: ShopIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddIcon
  }
]

export default listLinks
