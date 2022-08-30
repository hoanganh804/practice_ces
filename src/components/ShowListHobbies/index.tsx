import useFetchListHobbies from "../../hooks/useFetchListHobbies";
import useSortHobbies from "../../hooks/useSortHobbies";

const ShowListHobbies: React.FC = () => {
  const { dataListHobbies } = useFetchListHobbies();
  const { dataListHobbiesSorted, sortData } = useSortHobbies(dataListHobbies);

  return (
    <>
      <div className="list_hobbies_title">List Hobbies Practice hook</div>
      <div>
        {dataListHobbiesSorted.length
          ? dataListHobbiesSorted.map((hobby) => (
              <div key={hobby.key}>
                {hobby.name}:{hobby.value}
              </div>
            ))
          : dataListHobbies.map((hobby) => (
              <div key={hobby.key}>
                {hobby.name}:{hobby.value}
              </div>
            ))}
      </div>
      <button onClick={() => sortData()}>Sort list hobbies by name</button>
    </>
  );
};

export default ShowListHobbies;
