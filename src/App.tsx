import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Alert, {AlertType} from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
            <div>
        <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1} disabled>cool link2</MenuItem>
          <MenuItem index={2}>cool link3</MenuItem>
        </Menu>
      </div>
      <div className="App-header">
        <Button onClick={(e) => {e.preventDefault(); alert(123)}}>Hello</Button>
        <Button disabled>disabled</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="https:google.com">google link</Button>
        <Button disabled btnType={ButtonType.Link} href="https:google.com">disabled google link</Button>
      </div>
      <hr/>
      <div>
        <Alert title="React" description="React is easy"/>
        <Alert alertType={AlertType.Success} title="React success" description="React is easy"/>
        <Alert alertType={AlertType.Warning} title="React warning" description="React is easy"/>
        <Alert alertType={AlertType.Danger} title="React danger" description="React is easy"/>
      </div>
      <hr/>
    </div>
  );
}

export default App;
