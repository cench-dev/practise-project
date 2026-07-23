import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { updateGoal } from "../../api/userApi";
import type { User } from "../../types/UserTypes";


type Props = {
    user: User;
    onUpdate: (user: User) => void;
};


export function ReadingGoal({ user, onUpdate }: Props) {

    const [edit, setEdit] = useState(false);

    const [goal, setGoal] = useState(
        user.readingGoal ?? 0
    );

    const [year, setYear] = useState(
        user.goalYear ?? new Date().getFullYear()
    );


    async function save() {

        const response = await updateGoal(
            user.id,
            goal,
            year
        );


        onUpdate({
            ...user,
            readingGoal: response.readingGoal,
            goalYear: response.goalYear
        });


        setEdit(false);
    }


    return (
        <div className={""}>

            <div>
                <p>
                    Цель прочитать на {user.goalYear ?? "год"}
                </p>

                <p>
                    {user.readingGoal ?? 0}
                </p>
            </div>


            <Button onClick={() => setEdit(true)}>
                Изменить цель
            </Button>


            {edit && (
                <div>

                    <input
                        type="number"
                        value={year}
                        onChange={(e) =>
                            setYear(Number(e.target.value))
                        }
                    />


                    <input
                        type="number"
                        value={goal}
                        onChange={(e) =>
                            setGoal(Number(e.target.value))
                        }
                    />


                    <Button onClick={save}>
                        Сохранить
                    </Button>

                </div>
            )}

        </div>
    );
}