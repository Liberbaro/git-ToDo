const useFilter = (changeListToDo, setActiveFilter, listToDo) => {
  const filtersList = [
    { label: "All", mainClass: "all" },
    { label: "Active", mainClass: "" },
    { label: "Completed", mainClass: "completed" },
  ];

  const countTasksLeft = listToDo.filter(({ done }) => !done).length;

  const selectTaskFilter = (label) => {
    changeListToDo((oldList) => {
      oldList.map((el) => {
        if (label === "all") el.display = "block";
        else el.display = el.className === label ? "block" : "none";
        return el;
      });
    });
    setActiveFilter(label);
  };

  const filterFunc = { filtersList, selectTaskFilter, countTasksLeft };
  return filterFunc;
};

export default useFilter;
