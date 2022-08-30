import { useEffect, useState } from "react";

import { Hobby } from "../components/PracticeForm";

const useSortHobbies = (dataListHobbies: Hobby[]) => {
  const [dataListHobbiesSorted, setDataListHobbiesSorted] =
    useState<Hobby[]>(dataListHobbies);

  useEffect(() => {
    setDataListHobbiesSorted(dataListHobbies);
  }, [dataListHobbies]);

  const sortData = (): void => {
    const listHobbiesSorted: Hobby[] = [...dataListHobbiesSorted].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setDataListHobbiesSorted(listHobbiesSorted);
  };

  return { dataListHobbiesSorted, sortData };
};

export default useSortHobbies;
