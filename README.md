
# Simple React Router

This is simple working react router.
## Installation

Install stupid-react-router with npm

```bash
  npm install stupid-react-router
```

## Usage/Examples

### Route
Show children when path is correct
```javascript
import { Route } from 'stupid-react-router'

function App() {
  return (<Route path="/path">
    show on /path/+
    <Route path="/exact" exact>
        show on /path/exact
    </Route>

    <Route path="/:user/edit" exact
        values={[':user']}
        setValues={[e => {
          console.log(e); // anything/edit
        }]}>>
        show on /path/anything/edit 
    </Route>
  </Route>);
}
```

### Switch
Show only first correct Route
```javascript
import { Switch, Route } from 'stupid-react-router'

function App() {
  return (<Switch>
    <Route path="/path">show on /path/+</Route>
    <Route>show on not /path/+</Route>
  </Switch>);
}
```

### Link
Redirects on click to desired path
```javascript
import { Link } from 'stupid-react-router'

function App() {
  return (<Link to="/">link</Link>);
}
```

### redirect
redirects to desired path as not component
```javascript
import { redirect } from 'stupid-react-router'

function App() {
  const handle = ()=>{
    redirect('/path');
  }

  return (<div>
  </div>);
}
```

### Redirect
redirects on show to desired path
```javascript
import { Switch, Route, Redirect } from 'stupid-react-router'

function App() {
  const handle = ()=>{
    redirect('/path');
  }

  return (<Switch>
    <Route path="/path">path</Route>
    <Route><Redirect to="/path"/></Route>
  </Switch>);
}
```

### GetPath
returns path to callback
```javascript
import { Route, GetPath } from 'stupid-react-router'

function App() {

  return (<Route path="/route">
    <GetPath callback={(path)=>{
        console.log(path); // ''
    }}/>
    <GetPath relative={false} callback={(path)=>{
        console.log(path); // '/route'
    }}/>
  </Route>);
}
```
## Deployment

For deployment of this router you can use 

Web server like apache2\
Hosting platform

Or just use serve
```bash
  npm run build
  serve -s build
```



## License

ISC © [ogiusek](https://github.com/ogiusek)

