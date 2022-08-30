import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useFetchListHobbies = () => {
  const dataListHobbies = useSelector((state: RootState) => state.user.hobbies);
  return { dataListHobbies };
};

export default useFetchListHobbies;
