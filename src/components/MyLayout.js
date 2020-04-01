import Head from "next/head"
import Sidebar from './SideBar.js'
import Header from './Header'
import Content from './Content'


const layoutStyle = {
  // margin: 10,
  // padding: 20,
  // border: '1px solid #DDD'
};


const Layout = props => (
    <div className="Layout" style={layoutStyle}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header />

      <div className="wrapper">
        <Sidebar />
        <div className="Content">
          {props.children}
          <Content />
        </div>
      </div>
      
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .Layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }
        
        .Content {
          flex: 1;
          display: flex;
          flex-direction: row;
          font-family: Arial;
        }

        .wrapper {
          
        }
        `}</style>
  </div>
);

export default Layout;