import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  NavbarItem,  
  NavbarDropdown, 
  NavbarStart,
  NavbarMenu,
  NavbarBurger,
  NavbarBrand,
  Navbar,
  NavbarEnd,
} from 'bloomer';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Navigation extends Component {

  state = {
    isActive: false
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive})
  }

  render() {
    return (
    <div>
        <Navbar style={{ margin: '0' }} isTransparent="true">
          <NavbarBrand>
            <NavbarItem>
              <img src="http://brandmark.io/logo-rank/random/beats.png" style={{ marginRight: 5 }} /> HealthiHost
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}/>
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>

                <NavbarDropdown>
                  <NavbarItem href='#/d'><NavBarLink exact to="/">Home</NavBarLink></NavbarItem>
                  <NavbarItem href='#/d'><NavBarLink exact to="/massage">Massage</NavBarLink></NavbarItem>
                  <NavbarItem href='#/d'><NavBarLink exact to="/minerals">Minerals</NavBarLink></NavbarItem>
                  <NavbarItem href='#/d'><NavBarLink exact to="/movement">Movement</NavBarLink></NavbarItem>
                </NavbarDropdown>  

            </NavbarStart>
          </NavbarMenu>
        </Navbar>
    </div>
    );
  }
}




export default Navigation;
