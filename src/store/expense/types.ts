export const GET_SUCCESS = "expenses/GET_SUCCESS";
export const GET_FAILED = "expenses/GET_FAILED";
export const GET_LOADING = "expenses/GET_LOADING";

export interface ExpenseAction {
    type: string,
    payload: Expense[],
    error: string
}

export type Expense = {
    id: number;
    payee: string;
    registerDate: Date;
    amount: number;
    note: string;
    status: ExpenseStatus;
}

export enum ExpenseStatus {
    Unresolved,
    InProgress,
    Resolved
}

export type ExpenseState = {
    data: Expense[] | null;
    loading: boolean;
    error: string;
}