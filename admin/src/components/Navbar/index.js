import React from "react";
import { Link } from "react-router-dom";

export default props => 

<> 
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
<div className="sidebar-brand-text mx-3">Gold{"&"}Silver<sup>Admin</sup></div>
</Link>

<hr className="sidebar-divider my-0" />

<li className="nav-item active">
  <Link className="nav-link" to="index.html">
    <i className="fas fa-fw fa-tachometer-alt"></i>
    <span>Dashboard</span></Link>
</li>

<hr className="sidebar-divider" />

<div className="sidebar-heading">
  Produtos
</div>

<li className="nav-item">
  <Link className="nav-link collapsed" to="/produtos/list" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    <i className="fas fa-bars"></i>
    <span>Listar Prdutos</span>
  </Link>
  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Custom Components:</h6>
      <Link className="collapse-item" to="buttons.html">Buttons</Link>
      <Link className="collapse-item" to="cards.html">Cards</Link>
    </div>
  </div>
</li>

<li className="nav-item">
  <Link className="nav-link collapsed" to="/produtos/new" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
    <i className="fas fa-fw fa-wrench"></i>
    <span>Novo Produto</span>
  </Link>
  <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Custom Utilities:</h6>
      <Link className="collapse-item" to="utilities-color.html">Colors</Link>
      <Link className="collapse-item" to="utilities-border.html">Borders</Link>
      <Link className="collapse-item" to="utilities-animation.html">Animations</Link>
      <Link className="collapse-item" to="utilities-other.html">Other</Link>
    </div>
  </div>
</li>

<hr className="sidebar-divider" />
<div className="text-center d-none d-md-inline">
  <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
</>