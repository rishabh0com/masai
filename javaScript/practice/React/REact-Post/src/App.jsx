import { useEffect, useState } from 'react'
import axios from "axios"
import Post from './post'

// const getData = async (url) => {
//   try {
//     let res = await axios.get(url)
//     return res.data
//   } catch (error) {
//     throw new Error(error)
//   }
// }

function App() {

  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState(false)
  const [page,setPage] = useState(1)

  const getData = async(page) =>{
    setLoading(true)
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      let data = await response.data
      setPosts(data)
      setLoading(false)
    } catch (error) {
      setErr(true)
      setLoading(false)
    }
  }
  console.log(posts)
  useEffect(()=>{
    getData(page)
  },[page])
  // if(loading){
  //   return (<h1>Loading....</h1>)
  // }
  if(err){
    return (<h1>Something went wrong....</h1>)
  }

  return (
    <div style={{position : 'fixed',top : '0px'}}>
        <h2>page : {page}</h2>
        <button disabled={page===1} onClick={()=> setPage(page-1)}>previous</button>
        <button  disabled={page===10} onClick={()=> setPage(page+1)}>next</button>
        
      <div>
  
        {loading ? (<h1>Loading...</h1>) : <Post posts={posts}  />}
      </div>
    </div>
  )
}

export default App










// const [loading, setLoading] = useState(false)
// const [posts, setPosts] = useState([])
// const [err, setErr] = useState(false)
// // Step 1 : Implement pagination
// const [page, setPage] = useState(1)

// // Step 2 : add page as dependancy and update url accordingly;
// useEffect(() => {
//   fetchAndUpdateData(page)
// }, [page])

// const fetchAndUpdateData = async (page) => {
//   setLoading(true)
//   try {
//     let response = await axios.get( `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`) 
//     let data = await response.data
//     setPosts(data)
   
//     setLoading(false)
//   } catch (error) {
//     setErr(true)
//     setLoading(false)
//   }
// }
// console.log(posts)

// if (loading) {
//   return <h1>Loading...</h1>
// }

// if (err) {
//   return <h1>Something went wrong.. please refresh</h1>
// }

// return (
//   <>
//     <div >
//       <button onClick={() => setPage(page - 1)}>PREVIOUS</button>
//       <p>{page}</p>
//       <button onClick={() => setPage(page + 1)}>NEXT</button>
//     </div>
//     {posts.map((post) => (
//       <p style={{textAlign :'start'}} 
//       key={post.id} id={post.id} >{post.id}.  {post.title}</p>
//     ))}
//   </>
// )
// }
