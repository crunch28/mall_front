import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
    title:'', writer:'', dueDate:''
};

const AddComponent = () => {
    const [todo, setTodo] = useState({...initState});
    const [result, SetResult] = useState(null);
    const {moveToList} = useCustomMove();

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({...todo});
    };

    const handleClickAdd = () => {
        postAdd(todo)
        .then(result => {
            SetResult(result.TNO);
            setTodo({...initState});
    }).catch(e => console.log(e));
    };

    const closeModal = () => {
        SetResult(null);
        moveToList();
    };

    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {result ? <ResultModal title={`Add Result`} content={`New ${result} Added`} callbackFn={closeModal}></ResultModal> : <></>}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="title" type={`text`} value={todo.title} onChange={handleChangeTodo}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="writer" type={`text`} value={todo.writer} onChange={handleChangeTodo}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="duedate" type={`date`} value={todo.dueDate} onChange={handleChangeTodo}></input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button" onClick={handleClickAdd} className="rounded p-4 w-36 bg-blue-500 text-xl text-white">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddComponent;