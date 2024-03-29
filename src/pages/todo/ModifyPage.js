import { useNavigate } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = ({tno}) => {
    const navigate = useNavigate();
    const moveToRead = () => {
        navigate({pathname:`todo/read/${tno}`})
    };
    const moveToList = () => {
        navigate({pathname:`todo/list`})
    };
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo Modify Page
            </div>
            <ModifyComponent tno={tno}></ModifyComponent>
        </div>
    );
};

export default ModifyPage;