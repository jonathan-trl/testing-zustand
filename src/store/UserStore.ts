import { create } from 'zustand';

type UserProps = {
    id: number,
    name: string,
    email: string
}

type ActionsProps = {
    addUser: (user: UserProps) => void;
    removeUser: (userId: number) => void;
}

type StoreProps = {
    state: {
        users: UserProps[]
    },
    actions: ActionsProps
}

export const useUserStore = create<StoreProps>((set) => ({
    state: {
        users: []
    },
    actions: {
        addUser: (user) =>
            set(
                (state) => ({ state: { users: [...state.state.users, user] } })
            ),
        removeUser: (userId) =>
            set(
                (state) => ({ state: { users: state.state.users.filter(user => user.id !== userId) } })
            )
    }
}))