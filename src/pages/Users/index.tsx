import { useState } from "react";
import { useUserStore } from "../../store/UserStore";

const Users = () => {
    const {
        state: { users },
        actions: { addUser, removeUser },
    } = useUserStore();

    const [id, setId] = useState(1);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setId(id + 1);

        const name = (e.target as any).name.value;
        const email = (e.target as any).email.value;

        console.log(id);
        addUser({ id, name, email });
    };

    return (
        <>
            <div>
                <h1>User Store</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o nome do usuário"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o email do usuário"
                    />
                    <button type="submit">Adicionar usuário</button>
                </form>

                {users.map((user) => (
                    <div key={user.id}>
                        <br />
                        <div>id: {user.id}</div>
                        <div>nome: {user.name}</div>
                        <div>email: {user.email}</div>
                        <button onClick={() => removeUser(user.id)}>
                            Remover
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;
