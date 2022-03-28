/*The keyword to create an enumerable is enum */
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.Done);
/*you will notice that 2 will be console logged. That is because the enum increments from 0 i.e
NotStarted will be 0, InProgress will be 1, Done will be 2. Also notice that we started
each with capital letters, that is just the code style. always add enum to the name*/
/* We can use enum as data types and as values e.g */
var notStartedStatus = StatusEnum.NotStarted;
/*Status here acts as a datatype and a value if you use let to declare, you will
 see that because the datatype is an enumm, you can only assigne any of the three prop in the enum
 */
var startedStatus = StatusEnum.InProgress;
// startedStatus = 'name'; this will give an error
startedStatus = StatusEnum.Done; //this will work
/*by default numeric values are assigned to enum and they are incremented automatically
, to assign what you want, do the following, notice that = was used instead of :
*/
var LoanStatusEnum;
(function (LoanStatusEnum) {
    LoanStatusEnum["Pending"] = "pending";
    LoanStatusEnum["Active"] = "active";
    LoanStatusEnum["Completed"] = "completed";
    LoanStatusEnum["Late"] = "late";
})(LoanStatusEnum || (LoanStatusEnum = {}));
var stat = LoanStatusEnum.Pending;
console.log('stat 1---', stat);
stat = LoanStatusEnum.Active;
console.log('stat 2---', stat);
var x = {
    id: '1',
    Status: LoanStatusEnum.Pending
};
