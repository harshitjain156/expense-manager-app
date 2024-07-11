interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  userId?:string
}

interface IAuthenticatedUser {
  email: string;
  name: string;
}
interface IColor {
  name: string;
  id: string;
  code: string;
}
interface IIcon {
  name: string;
  id: string;
  symbol: string;
}
interface ICategory {
  _id: string;
  name: string;
  user: IUser | string;
  isEditable: boolean;
  color: IColor;
  icon: IIcon;
}

interface ICategoryRequest {
  name: string;
  color: IColor;
  icon: IIcon;
}

interface ITask {
  _id: string;
  name: string;
  isCompleted: boolean;
  categoryId: string;
  createdAt: string;
  date: string;
}
interface ITaskRequest {
  name: string;
  isCompleted: boolean;
  categoryId: string;
  date: string;
}

interface ITaskStatusRequest {
  id: string;
  isCompleted: boolean;
}

interface ITotalMonthlyExpense {
  _id: {
    month: number;
    year: number;
  };
  amount: number;
}

interface ITransactions {
  _id: string;
  groupId: string;
  expenseName: string;
  expenseDescription: string;
  expenseAmount: number;
  expenseCategory: string;
  expenseCurrency: string;
  expenseDate: string;
  expenseOwner: string;
  expenseMembers: string[];
  expensePerMember: number;
  expenseType: string;
}

interface IGroup {
  groupCategory: string;
  groupCurrency: string;
  groupDescription: string;
  groupMembers: string[];
  groupName: string;
  groupOwner: string;
  groupTotal: number;
  split: any;
  _id: string;
}
interface ICreateGroup {
  groupCategory: string;
  groupCurrency: string;
  groupDescription: string;
  groupMembers: string[];
  groupName: string;
}

interface ICreateExpense{
  expenseName:string
  expenseDescription:string
  paymentMethod:string
  expenseOwner:string
  expenseAmount:string
  expenseCategory:string
}

interface IDailyExpense {
  _id: {date: 24; month: 6; year: 2024};
  amount: 4150;
}
