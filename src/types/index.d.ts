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
  _id: '667a90b3d528699b02b10e17';
  groupId: '667a908dd528699b02b10e07';
  expenseName: 'tickets';
  expenseDescription: 'movie tickets';
  expenseAmount: 2000;
  expenseCategory: 'Entertainment';
  expenseCurrency: 'INR';
  expenseDate: '2024-06-25T09:40:33.000Z';
  expenseOwner: 'test-mail5@gmail.com';
  expenseMembers: [
    'test-mail3@gmail.com',
    'test-mail5@gmail.com',
    'test-mail4@gmail.com',
    'test-mail@gmail.com',
  ];
  expensePerMember: 500;
  expenseType: 'UPI Payment';
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

interface IDailyExpense {
  _id: {date: 24; month: 6; year: 2024};
  amount: 4150;
}
