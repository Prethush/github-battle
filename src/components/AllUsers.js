

function AllUsers(props) {
    return (
       <div className={props.darkMode ? "flex-25 bg-gray-600 m-2 p-6 rounded-md": "flex-25 bg-gray-200 m-2 p-6 rounded-md"}>
           <h2 className="text-3xl text-center">#{props.score}</h2>
           <div className="mt-3 mb-1">
               <img src={props.owner.avatar_url} alt={props.owner.login} className="w-40 mx-auto"/>
           </div>
           <a href={props.html_url}>
                 <h2 className="text-center my-3 text-red-900 font-bold text-2xl">{props.owner.login}</h2>
           </a>
           <div>
                <i className="fas fa-user text-red-200 mr-3"></i>
                <h3 className="text-xl font-semibold inline-block">{props.owner.login}</h3>
           </div>
           <div>
                <i className="fas fa-star text-yellow-300 mr-3"></i>
                <h3  className="text-xl inline-block"> {props.stargazers_count} stars</h3>
           </div>
           <div>
                <i className="fas fa-code-branch text-blue-300 mr-3"></i>
                <h3 className="text-xl inline-block">{props.forks} forks</h3>
           </div>
           <div>
                <i className="fas fa-exclamation-triangle text-pink-400 mr-3"></i> 
                <h3 className="text-xl inline-block">{props.open_issues} issues</h3>
           </div>
          
       </div>
    )
}

export default AllUsers;