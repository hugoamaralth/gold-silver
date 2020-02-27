import React from "react";
import { Switch, Route} from "react-router-dom";
import ListaProdutos from "./components/ListaProdutos";
import NovoProduto from "./components/NovoProduto";
import Edit from "./components/Edit"
export default props =>
   <Switch>
       <Route path="/produtos/list" component={ListaProdutos}/>
       <Route path="/produtos/new" component={NovoProduto}/>
       <Route path="/produtos/edit/:id" component={Edit}/>
   </Switch>