---
id: adding-teammates
sidebar_position: 3
---  
  
# Adding Teammates
  
*Last updated: July, 18 2023* 
  
To access any network resources, users need to be invited by a network administrator and given permissions, membership, or roles that grant them access.  The network owner will be the only person capable of inviting users when the network is first setup.  To start, navigate to the Users & Teams page from the network administration page or the network sidebar.  
  
![Go the users and teams page](https://storage.googleapis.com/tetheros-public/marian/pro-add-teammates-page.jpg)  
  
### Inviting a new user  
  
Invite one or more people to your network with their email address.  The menu requires you to assign them permissions upon invitation by either inviting them to a workspace or a team.  
  
If you invite them to a workspace, you will be required to assign them a role for their *explicit workspace membership*.  If you invite them to a team, they will automatically inherit the roles, permissions, and access of the team they're part of.  It is recommended to organize core network users onto teams, and temporary or transient users into teams or explicit workspace membership.  
   

<br/><br/>  
   

### Pending users
  
Users that already have a Tetheros account associated with their email will be automatically granted access and membership to your network.  If they don't have an account, Tetheros will mark them as `Pending` in the Network Users panel and send an email invitation requesting them to sign up.  Once their profile is created, they will no longer be `Pending` and will assume the full permissions and access designed by the invitation.  
   
<br/><br/>  

### User permissions  
  
The access a user has in your network depends on what permissions their roles give them and what access their teams give them.  
  
**Roles** control *what* a user can do in a workspace or network.  
  
**Teams** control *where* the user can exercise their permissions.  
  
A user with administrative permissions can only use them in workspaces they have access to, which is dictated by what Teams they are on.  
   
<br/><br/>  

### Team-based access  
  
Users can access workspaces and resources in the network two different ways: through their membership on network teams and through explicit workspace memberships.  
  
**Team memberships** place the user on a network-defined team.  All teams have three things in common:  
- List of workspaces they can access  
- A role (permission set) for anyone on the team  
- Users that are part of the team  
  
For example, a network might create a team called *Designers* for the organization's designers and then grant them access to all relevant workspaces that designers need access to.  Furthermore, the organization may determine that designers only need to view, update, and create items, but not delete them, and give the *Designers* team those permissions with the *User* role.  

![Designers team](https://storage.googleapis.com/tetheros-public/marian/pro-add-teammates-team-example.jpg)  
  
Users can belong on multiple teams.  If their teams have different permission levels, they will always assume the combination of all permissions granted.  

<br/><br/>  

### An alternative to team-based access
  
User access can be explicitly granted with an associated role from the Users panel:  
  
![Explicit workspace access](https://storage.googleapis.com/tetheros-public/marian/pro-add-teammates-non-team-example.jpg)  
  
Users with explicit workspace access require individual management.  Reserve this function for special circumstances to avoid creating complicated permission management models.
  
*Users inherit all permissions given through teams or explicit access*
  

<br/><br/>  

### View a user's permissions and access
  
You can see what access any user in the network has from the `Users` tab of the Network Users & Teams page by clicking on the pencil icon on the right side of their row:  
  
![View a network user permissions](https://storage.googleapis.com/tetheros-public/marian/pro-add-teammates-permissions-view.jpg)  
  
You can also manage their access and roles from here.

---  