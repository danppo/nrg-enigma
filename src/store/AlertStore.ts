import { create } from 'zustand';
import { nanoid } from 'nanoid/non-secure';

export enum alertStatus {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  LOADING = 'loading',
}

export type Alert = {
  title: string;
  description: string;
  id: string;
  type: alertStatus;
};

interface AlertStore {
  alertList: Alert[];
  addAlert: (item: Alert) => void;
  removeAlert: (id: string) => void;
  clear: () => void;
}
const useAlertStore = create<AlertStore>((set) => ({
  alertList: [
    {
      title: 'oops',
      description: 'description',
      type: alertStatus.ERROR,
      id: nanoid(5),
    },
    {
      title: 'oops',
      description: 'description',
      type: alertStatus.LOADING,
      id: nanoid(5),
    },
    {
      title: 'oops',
      description: 'description',
      type: alertStatus.SUCCESS,
      id: nanoid(5),
    },
  ],
  addAlert: (alert) =>
    set((state) => ({
      alertList: [
        { title: alert.title, description: alert.description, type: alert.type, id: nanoid(4) },
        ...state.alertList,
      ],
    })),
  removeAlert: (id) =>
    set((state) => ({
      alertList: state.alertList.filter((alert) => alert.id !== id),
    })),
  clear: () =>
    set(() => ({
      alertList: [],
    })),
}));
export default useAlertStore;
