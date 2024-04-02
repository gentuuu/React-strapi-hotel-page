
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Heading  from './components/common/heading/Heading'
import Home  from './components/home/Home'
import Footer from './components/common/footer/Footer'
import Room from './components/page/room/Room'
import Blog from './components/page/blog/Blog'
import Post from './components/page/blog/Post'
import Contact from './components/contact/Contact'
import Aboustus from './components/aboutus/Aboustus'
import Roompage from './components/page/room/Roompage'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Category from './components/page/category/Category'


// initialize apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {


  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
        <Heading />
        <Routes>
         <Route path='/' element={ <Home /> } />
         <Route path='/pokoje' element={ <Room/> } />
         <Route path='/pokoje/:id' element={ <Roompage/> } />
         <Route path='/blogs' element={ <Blog/> } />
         <Route path="/blogs/:id" element={<Post />} />
         <Route path="/kontakt" element={<Contact />} />
         <Route path="/onas" element={<Aboustus />} />
         <Route path="/categories/:id" element={<Category />} />
        </Routes>
        <Footer />
        </ApolloProvider>
      </BrowserRouter>


    </>
  )
}

export default App
