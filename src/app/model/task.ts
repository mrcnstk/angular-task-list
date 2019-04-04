export interface Task {
  _id?: string;
  userId: string;
  name: string;
  created: string;
  end?: string;
  isDone: boolean;
}
