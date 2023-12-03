import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        
      <div className="newUserItem">
          <label>ID</label>
          <input type="text" placeholder="ID" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>

         <div className="newUserItem">
          <label>Role</label>
          <input type="text" placeholder="Developer" />
        </div> 
        <button className="newUserButton">Create</button> 
      </form>
    </div>
  );
}
