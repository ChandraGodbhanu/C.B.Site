
import { NavLink } from 'react-router-dom'
import { Navbar } from './Navbar'
import { styled } from 'styled-components'


export const Header = () => {
  return (
    <Mainheader >
      <NavLink>
        <img src='./images/avatar.png' alt ="logo" className='logo'/>
      </NavLink>
      <Navbar/>
    </Mainheader>
  )
}
const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
  height: auto;
  max-width: 50%;
}
`;