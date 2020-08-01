export class UsersService{
    activeUsers = ['max' , 'anna'];
    inactiveUsers = ['prashant', 'suhashini','harsh'];

    onSetToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
      }
    
      onSetToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
      }
}