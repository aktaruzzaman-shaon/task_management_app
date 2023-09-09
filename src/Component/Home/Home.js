import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {

    const [taskData, setTaskData] = useState({});
    const [taskArray, setTaskArray] = useState([]);
    const [userid, setUserid] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    let getUserLoaclStorage = localStorage.getItem('users')
    let arrayofUsers = JSON.parse(getUserLoaclStorage)
    arrayofUsers.splice(0, 1)

    let taskobject = { id: userid, task: taskData.title }

    useEffect(() => {
        setTaskArray(
            (defaultvalue) => {
                return [...defaultvalue, taskobject];
            }
        );
    }, [taskData])

    let selectedUser = arrayofUsers.find(userObject => userObject?.userId === userid)

    const handleMakeTask = (data) => {
        setTaskData(data)
        console.log(taskData)
    }

    console.log(taskArray)


    localStorage.setItem("tasks", JSON.stringify(taskArray));

    const handleDropDownChange = (e) => {
        setUserid(e.target.value)
        arrayofUsers.map((selectedUser) => {

        })
    }

    return (
        <div>
            <p className='text-6xl'>This is home page</p>
            <div>
                <form onSubmit={handleSubmit(handleMakeTask)}>
                    <input type='text' placeholder="Title" {...register("title")} />t
                    <input type='text' placeholder="Description" {...register("description")} />
                    <input type='date' placeholder="dueDate" {...register("dueDate")} />
                    <input type='text' placeholder="priority" {...register("priority")} />
                    <div>
                        Assign to :
                        <select name="" id="" onChange={handleDropDownChange}>
                            {
                                arrayofUsers.map((singleUser) => {
                                    return <option value={singleUser.userId} key={singleUser.userId}>{singleUser.mail}</option>
                                })
                            }
                        </select>
                    </div>

                    {errors.password && <span>This field is required</span>}
                    <input type="submit" value="Submit" className='btn bg-zinc-500' />
                </form>
            </div>
        </div>
    );
};

export default Home;