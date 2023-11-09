import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function DropdownMenuNav({title,className}) {
  return (
    <Dropdown  >
      <Dropdown.Toggle style={{
        marginTop:'-5px', border: 'none',
  backgroundColor: 'initial',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: '600',
  transition: 'all 250ms linear'}}  id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item  as={Link} to={'/'}  >Todo</Dropdown.Item>
        <Dropdown.Item as={Link} to={'/category/Landing'} >Landing Pages</Dropdown.Item>
        <Dropdown.Item as={Link} to={'/category/Web'} >Web Comercial</Dropdown.Item>
        <Dropdown.Item as={Link} to={'/category/E-Commerce'} >Comercio en Linea</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenuNav;