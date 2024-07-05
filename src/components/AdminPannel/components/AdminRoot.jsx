import React from "react";
import { Route } from "react-router-dom";

// components

// pages

// context

export default function AdminRoot() {
  // global
  return (
    <div>
      
    </div>
    // <HashRouter>
    //   <Switch>
    //     {/* <Route exact path="/admin" render={() => <Redirect to="/app/dashboard" />} /> */}
    //     {/* <Route
    //       exact
    //       path="/app"
    //       render={() => <Redirect to="/app/dashboard" />}
    //     /> */}
    //      <Route path="/" component={Header} />
    //     <Route path="/admin" component={Layout} />
    //     <Route path="/login" component={Login} />
    //     <Route component={Error} />
    //   </Switch>
    // </HashRouter>
  );

  // #######################################################################

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated ? (
  //           React.createElement(component, props)
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: {
  //                 from: props.location,
  //               },
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }

//   function PublicRoute({ component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated ? (
//             <Redirect
//               to={{
//                 pathname: "/",
//               }}
//             />
//           ) : (
//             React.createElement(component, props)
//           )
//         }
//       />
//     );
//   }
}
