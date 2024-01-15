function Post(prop){
    return (
        <>
         {prop.posts.map((post,index)=>(
            <p key={index} id={post.id}>{post.id} . {post.title}</p>
         ))}
        </>
    )

}

export default Post;