export const workspaceList = [
  {
    name: "Workspace 1",
    id: "workspace1",
  },
  {
    name: "Workspace 2",
    id: "workspace2",
  },
  {
    name: "Workspace 3",
    id: "workspace3",
  },
  {
    name: "Workspace 4 has a longer name than the rest",
    id: "workspace4",
  },
];

export const workspaceObject = ((list: typeof workspaceList) => {
  const obj: {[key: string]: string} = {};
  list.forEach(item => {
    obj[item.id] = item.name;
  });
  console.log("workspaceObject", obj);
  return obj;
})(workspaceList);
console.log(workspaceObject);
