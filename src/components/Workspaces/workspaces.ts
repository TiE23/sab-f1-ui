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
  { name: "blah", id: "blah0" },
  { name: "blah", id: "blah1" },
  { name: "blah", id: "blah2" },
  { name: "blah", id: "blah3" },
  { name: "blah", id: "blah4" },
  { name: "blah", id: "blah5" },
  { name: "blah", id: "blah6" },
  { name: "blah", id: "blah7" },
  { name: "blah", id: "blah8" },
  { name: "blah", id: "blah9" },
  { name: "blah", id: "blah10" },
  { name: "blah", id: "blah11" },
  { name: "blah", id: "blah12" },
  { name: "blah", id: "blah13" },
  { name: "blah", id: "blah14" },
  { name: "blah", id: "blah15" },
  { name: "blah", id: "blah16" },
  { name: "blah", id: "blah17" },
  { name: "blah", id: "blah18" },
  { name: "blah", id: "blah19" },
  { name: "blah", id: "blah20" },
  { name: "blah", id: "blah21" },
  { name: "blah", id: "blah22" },
  { name: "blah", id: "blah23" },
  { name: "blah", id: "blah24" },
  { name: "blah", id: "blah25" },
  { name: "blah", id: "blah26" },
  { name: "blah", id: "blah27" },
  { name: "blah", id: "blah28" },
  { name: "blah", id: "blah29" },
];

export const workspaceObject = ((list: typeof workspaceList) => {
  const obj: {[key: string]: string} = {};
  list.forEach(item => {
    obj[item.id] = item.name;
  });
  return obj;
})(workspaceList);
